/**
 * 亚马逊全景流量实验室 - 核心逻辑脚本
 */

// ==========================================
// 1. 实验室数据源 (Traffic Lab Data)
// ==========================================
const labData = {
    // --- SERP (搜索结果页) 流量位 ---
    'sb': {
        type: 'paid',
        title: 'Sponsored Brands (SB)',
        desc: '品牌推广广告。占据搜索结果页最黄金的顶部位置，通常展示品牌Logo、一段自定义标题和3款产品。是建立品牌认知和拦截竞品流量的第一道防线。',
        cost: 'CPC (按点击付费)',
        potential: '高 (品牌曝光)',
        tip: '务必测试“自定义主图”(Custom Image)，比仅展示产品图的点击率高出 2 倍以上。适合有多款变体或产品线的品牌。'
    },
    'sb_video': {
        type: 'paid',
        title: 'Sponsored Brands Video',
        desc: '品牌推广视频。在搜索结果中间展示自动播放的视频。由于占据版面大且动态吸睛，目前是亚马逊转化率极高的红利流量入口。',
        cost: 'CPC',
        potential: '极高 (高点击/高转化)',
        tip: '视频前3秒必须展示痛点或产品核心卖点。不要使用纯PPT式的图片轮播，那样会被买家直接划走。'
    },
    'sp': {
        type: 'paid',
        title: 'Sponsored Products (SP)',
        desc: '商品推广广告。外观与自然搜索结果几乎一致，仅多了一个灰色的 "Sponsored" 标。这是亚马逊目前流量最大、转化最直接的广告形式。',
        cost: 'CPC',
        potential: '极高 (直接出单)',
        tip: '新品期建议开启自动广告(Auto)跑词；成熟期利用手动广告(Manual)精准打击核心大词。'
    },
    'organic': {
        type: 'free',
        title: 'Organic Ranking (自然排名)',
        desc: '通过A10算法获得的免费排名。不花钱，但需要历史销量、点击率(CTR)和转化率(CVR)的长期积累。',
        cost: '时间成本 / 0元',
        potential: '稳定 (长期利润)',
        tip: '自然排名是“结果”不是“手段”。通过PPC广告推高销量和BSR排名后，自然排名会自动上升。'
    },
    'bottom_ad': {
        type: 'paid',
        title: 'Bottom of Search Ads',
        desc: '搜索页底部的广告位。虽然流量不如顶部和中部，但CPC成本通常较低，适合捡漏预算有限的流量。',
        cost: 'CPC (较低)',
        potential: '低 (捡漏)',
        tip: '适合预算有限的卖家，或者作为防御性投放，防止竞品在页面底部截流。'
    },

    // --- PDP (商品详情页) 流量位 ---
    'sd': {
        type: 'paid',
        title: 'Sponsored Display (SD)',
        desc: '展示型推广。具有极强的“侵略性”，常出现在五点描述下方或购物车下方，直接抢夺正在考虑购买的客户。',
        cost: 'CPC / vCPM',
        potential: '中 (进攻/防御)',
        tip: '利用SD广告进行“再营销(Retargeting)”，定向投放给看过你产品但没买的人，ROI通常不错。'
    },
    'fbt': {
        type: 'free',
        title: 'Frequently Bought Together (FBT)',
        desc: '经常一起购买。系统基于大数据自动生成的关联推荐。这是亚马逊最优质的免费关联流量，转化率极高。',
        cost: '免费',
        potential: '极高 (捆绑销售)',
        tip: '不要只卖单品。通过后台设置虚拟捆绑包(Virtual Bundle)人为增加两个产品同时购买的概率。'
    },
    'brands_related': {
        type: 'paid',
        title: 'Brands Related to This (SB)',
        desc: '详情页上的品牌推广。通常以“与此相关的品牌”形式出现，展示竞品的Logo和产品链接。',
        cost: 'CPC',
        potential: '中 (竞品截流)',
        tip: '这属于SB广告的 Product Targeting (商品定位) 功能。可以定向投放到头部竞品的详情页上，截取对手流量。'
    },
    'compare_table': {
        type: 'free',
        title: 'Compare with similar items',
        desc: '对比表格。亚马逊自动生成的同类产品参数对比表。这是用户流失的重灾区，也可能是流量来源。',
        cost: '免费',
        potential: '高 (参数党最爱)',
        tip: '确保你的 Listing 参数填写完整且有竞争力。如果你比竞品贵且参数差，用户会通过这个表格直接跳去竞品页面。'
    },
    'aplus': {
        type: 'free',
        title: 'A+ Content / Brand Story',
        desc: '图文版品牌描述。位于页面中部。其中的“标准对比图表(Standard Comparison Chart)”模块可以给自己的其他产品引流。',
        cost: '免费 (需品牌备案)',
        potential: '高 (店铺闭环)',
        tip: '利用 A+ 对比图表模块，将流量引导至你店铺里更高客单价或利润款的产品，形成流量闭环，防止跳失。'
    }
};

// ==========================================
// 2. 实验室交互逻辑 (Lab Logic)
// ==========================================
const lab = {
    currentView: 'serp',
    currentFilter: 'all',

    // 切换视图: SERP vs PDP
    switchView: function(viewName) {
        this.currentView = viewName;
        
        // 1. 切换中间画布显示
        document.getElementById('view-serp').classList.add('hidden');
        document.getElementById('view-pdp').classList.add('hidden');
        document.getElementById(`view-${viewName}`).classList.remove('hidden');

        // 2. 更新顶部按钮样式
        const btnSerp = document.getElementById('lab-tab-serp');
        const btnPdp = document.getElementById('lab-tab-pdp');
        const activeClass = ['bg-[#FF9900]', 'text-black', 'shadow'];
        const inactiveClass = ['text-gray-300', 'hover:text-white', 'bg-transparent'];

        if(viewName === 'serp') {
            btnSerp.classList.add(...activeClass);
            btnSerp.classList.remove('bg-transparent', 'text-gray-300');
            btnPdp.classList.remove(...activeClass);
            btnPdp.classList.add(...inactiveClass);
        } else {
            btnPdp.classList.add(...activeClass);
            btnPdp.classList.remove('bg-transparent', 'text-gray-300');
            btnSerp.classList.remove(...activeClass);
            btnSerp.classList.add(...inactiveClass);
        }
        
        // 3. 重置状态
        this.showEmptyState();
        this.filter(this.currentFilter); // 重新应用当前的滤镜
    },

    // 选中流量位 -> 更新右侧面板
    select: function(key) {
        const data = labData[key];
        if(!data) return;

        // 1. 高亮选中的元素 (视觉反馈)
        const allItems = document.querySelectorAll('.item-wrapper');
        allItems.forEach(el => el.classList.remove('item-selected'));
        // 注意：这里简单通过点击触发，若需精确对应 DOM 可增加 ID 匹配，此处主要依靠 CSS hover 效果和面板更新
        
        // 2. 显示内容面板
        document.getElementById('panel-empty').classList.add('hidden');
        document.getElementById('panel-content').classList.remove('hidden');
        
        // 3. 填充数据
        document.getElementById('detail-title').innerText = data.title;
        document.getElementById('detail-desc').innerText = data.desc;
        document.getElementById('detail-cost').innerText = data.cost;
        document.getElementById('detail-potential').innerText = data.potential;
        document.getElementById('detail-tip').innerText = data.tip;

        // 4. 更新 Badge 颜色
        const badge = document.getElementById('detail-badge');
        if(data.type === 'paid') {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white';
            badge.innerText = 'PAID TRAFFIC';
        } else {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white';
            badge.innerText = 'ORGANIC TRAFFIC';
        }
    },
    
    // 显示右侧空状态
    showEmptyState: function() {
        document.getElementById('panel-empty').classList.remove('hidden');
        document.getElementById('panel-content').classList.add('hidden');
    },

    // 滤镜逻辑: 全部 / 仅付费 / 仅免费
    filter: function(type) {
        this.currentFilter = type;
        const items = document.querySelectorAll('[data-type]');
        
        // 1. 更新左侧按钮样式
        ['all', 'paid', 'free'].forEach(k => {
            const btn = document.getElementById(`btn-filter-${k}`);
            if(k === type) {
                btn.classList.add('bg-blue-50', 'text-blue-700', 'border-blue-200');
                btn.classList.remove('border-transparent', 'text-gray-600');
            } else {
                btn.classList.remove('bg-blue-50', 'text-blue-700', 'border-blue-200');
                btn.classList.add('border-transparent', 'text-gray-600');
            }
        });

        // 2. 控制画布元素显隐
        items.forEach(item => {
            const itemType = item.getAttribute('data-type');
            const hotspot = item.querySelector('.hotspot-point');

            if(type === 'all' || itemType === type) {
                // 显示
                item.style.opacity = '1';
                item.style.filter = 'none';
                if(hotspot) hotspot.style.pointerEvents = 'auto'; // 启用热点点击
            } else {
                // 变淡 (Dimmed)
                item.style.opacity = '0.3';
                item.style.filter = 'grayscale(100%)';
                if(hotspot) hotspot.style.pointerEvents = 'none'; // 禁用热点点击
            }
        });
    },

    // X-Ray 透视开关
    toggleXray: function() {
        const checkbox = document.getElementById('xray-toggle');
        const canvas = document.getElementById('lab-canvas'); // 控制整个画布容器
        
        if(checkbox.checked) {
            canvas.classList.add('xray-active');
        } else {
            canvas.classList.remove('xray-active');
        }
    }
};

// ==========================================
// 3. 深度解析模块 (Deep Dive Tabs)
// ==========================================
const deepDiveData = {
    search: {
        title: "搜索流量 (Search Traffic)",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">原理：A10算法</h4>
                    <p class="mb-4 text-sm">亚马逊的搜索引擎核心目的是"让用户买到最想要的产品"。它主要通过以下因素决定排名：</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>关键词相关性：</strong> 标题、五点、Search Terms是否包含用户搜索词。</li>
                        <li><strong>历史转化率：</strong> 同样的曝光下，谁卖得更多，谁排名越高。</li>
                        <li><strong>近期销量权重：</strong> 即使是老品，如果近期销量下滑，排名也会掉。</li>
                    </ul>
                </div>
                <div class="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <h4 class="font-bold text-blue-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">lightbulb</span> 运营策略</h4>
                    <ul class="space-y-3 text-sm text-blue-800">
                        <li><strong>埋词 (SEO)：</strong> 利用工具(Helium 10/JS)反查竞品流量词，埋入Listing标题和ST中。</li>
                        <li><strong>长尾词打法：</strong> 新品不要硬刚大词(如 "Headphones")，先打长尾词(如 "White wireless headphones for running")，积累权重。</li>
                        <li><strong>Review维护：</strong> 评分低于4.0会严重影响自然流量的点击率。</li>
                    </ul>
                </div>
            </div>
        `
    },
    ads: {
        title: "广告流量 (Paid Traffic)",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">PPC 广告核心逻辑</h4>
                    <p class="mb-4 text-sm">付费流量是新品获取曝光的唯一快速通道。不投广告，新品几乎没有自然流量。</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>SP (商品推广):</strong> 最基础，转化最好。先开Auto跑词，再开Manual打大词。</li>
                        <li><strong>SB (品牌推广):</strong> 适合推品牌，拦截竞品。视频广告 (SBV) 是目前红利。</li>
                        <li><strong>SD (展示推广):</strong> 适合再营销，把看过你产品没买的人找回来。</li>
                    </ul>
                </div>
                <div class="bg-orange-50 p-5 rounded-lg border border-orange-100">
                    <h4 class="font-bold text-orange-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">trending_up</span> 预算建议</h4>
                    <ul class="space-y-3 text-sm text-orange-800">
                        <li><strong>新品期：</strong> 广告占比可能高达 80% 以上，ACOS 偏高是正常的。</li>
                        <li><strong>成长期：</strong> 随着自然排名上升，逐渐降低广告预算占比。</li>
                        <li><strong>成熟期：</strong> 广告主要用于防守（投自家品牌词）和进攻（投竞品词）。</li>
                    </ul>
                </div>
            </div>
        `
    },
    association: {
        title: "关联流量 (Recommendation)",
        content: `
             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">让系统自动推荐你</h4>
                    <p class="mb-4 text-sm">关联流量是转化率最高的流量来源，因为用户的购买意向非常明确。</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>FBT (买了又买):</strong> 互补品关联。例如：手电筒 + 电池。</li>
                        <li><strong>Compare with (看了又看):</strong> 竞品替代关联。系统会自动抓取参数相似的产品。</li>
                    </ul>
                </div>
                <div class="bg-purple-50 p-5 rounded-lg border border-purple-100">
                    <h4 class="font-bold text-purple-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">hub</span> 获取技巧</h4>
                    <p class="text-sm text-purple-800 mb-2"><strong>强制关联法：</strong></p>
                    <ul class="space-y-3 text-sm text-purple-800">
                        <li>1. 使用 SP 广告定位到互补品的 ASIN 页面。</li>
                        <li>2. 设置 "Virtual Bundle" (虚拟捆绑包)，人为制造一起购买的数据。</li>
                        <li>3. 站外 Deal 同时推两个产品，增加同时下单量。</li>
                    </ul>
                </div>
            </div>
        `
    },
    browse: {
        title: "类目与活动 (Events)",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">促销活动</h4>
                    <p class="mb-4 text-sm">活动是短期冲刺销量的最佳手段。</p>
                     <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>Coupon (优惠券):</strong> 绿色标签非常醒目，能显著提升点击率 (CTR)。</li>
                        <li><strong>Lightning Deal (LD 秒杀):</strong> 短时间大流量，不仅能清库存，还能瞬间拉升 BSR 排名。</li>
                        <li><strong>Prime Exclusive Discount:</strong> 大促期间 (会员日/黑五) 必备。</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-5 rounded-lg border border-green-100">
                    <h4 class="font-bold text-green-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">category</span> 类目节点</h4>
                    <p class="text-sm text-green-800">
                        <strong>节点选择技巧：</strong><br>
                        不要只盯着大类目。尝试寻找竞争较小、但精准的“长尾小类目”。<br>
                        获得小类目的 <span class="font-bold">#1 Best Seller</span> 标，比在大类目排第 50 名更有价值，因为那个橙色徽章能大幅提升转化率。
                    </p>
                </div>
            </div>
        `
    },
    external: {
        title: "站外流量 (External)",
        content: `
             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">何时做站外？</h4>
                    <p class="mb-4 text-sm">当站内广告成本 (CPC) 太高，或者新品需要第一波销量冲击时。</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>Deal Sites:</strong> Slickdeals, Dealnews。适合低价清库存或推爆款。</li>
                        <li><strong>TikTok/Ins:</strong> 适合外观新奇特、有演示属性的产品。</li>
                        <li><strong>Influencers:</strong> 亚马逊联盟红人。</li>
                    </ul>
                </div>
                <div class="bg-pink-50 p-5 rounded-lg border border-pink-100">
                    <h4 class="font-bold text-pink-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">savings</span> 品牌引流奖励 (BRB)</h4>
                    <p class="text-sm text-pink-800 mb-2">
                        亚马逊官方政策：如果你从站外（如 Facebook 广告、邮件营销）引流到亚马逊并产生销售，亚马逊会返还平均 <strong>10%</strong> 的销售佣金。
                    </p>
                    <p class="text-xs text-pink-700">这相当于变相降低了你的站外广告成本。务必使用 Amazon Attribution 链接来追踪。 </p>
                </div>
            </div>
        `
    }
};

function showDeepDive(key) {
    const data = deepDiveData[key] || deepDiveData['search']; 
    const contentArea = document.getElementById('content-area');
    
    // Update Tab Styles
    ['search', 'ads', 'association', 'browse', 'external'].forEach(k => {
        const btn = document.getElementById(`tab-${k}`);
        if(btn) {
            if (k === key) {
                btn.classList.add('tab-active');
                btn.classList.remove('tab-inactive');
            } else {
                btn.classList.remove('tab-active');
                btn.classList.add('tab-inactive');
            }
        }
    });

    if(contentArea) {
        contentArea.style.opacity = 0;
        setTimeout(() => {
            contentArea.innerHTML = data.content;
            contentArea.style.opacity = 1;
        }, 200);
    }
}

// ==========================================
// 4. 策略混合器 & 诊断工具 (Tools)
// ==========================================

// 流量配比计算器逻辑
function updateStrategy() {
    const val = parseInt(document.getElementById('stage-slider').value);
    const stageLabel = document.getElementById('stage-label');
    const paidEl = document.getElementById('paid-percent');
    const freeEl = document.getElementById('free-percent');
    const listEl = document.getElementById('strategy-list');

    let paidPct, freePct, stageText, strategies;

    if (val < 30) {
        // Launch Phase
        stageText = "新品推广期 (Launch)";
        paidPct = Math.max(70, 100 - val); // 100% down to 70%
        freePct = 100 - paidPct;
        strategies = [
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">SP广告 (Auto):</span> 必须开启，用于跑词和检测Listing相关性。</li>`,
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">VINE计划:</span> 付费获取前30个Review，是自然流量转化的基础。</li>`,
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">Coupon:</span> 设置大额优惠券点击率，人为拉升权重。</li>`
        ];
    } else if (val < 70) {
        // Growth Phase
        stageText = "销量增长期 (Growth)";
        paidPct = 50; 
        freePct = 50;
        strategies = [
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">SP广告 (Manual):</span> 将表现好的词从Auto转到Manual精准投放，控制ACOS。</li>`,
            `<li class="flex gap-2"><span class="text-green-400 font-bold">SEO优化:</span> 根据广告报表，将高转化词埋入Listing标题和五点，提升自然排名。</li>`,
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">LD秒杀:</span> 只要有推荐就报名，利用秒杀瞬间拉升BSR排名。</li>`
        ];
    } else {
        // Mature Phase
        stageText = "成熟盈利期 (Mature)";
        paidPct = Math.max(10, 40 - (val-70)); // Taper off ads
        freePct = 100 - paidPct;
        strategies = [
            `<li class="flex gap-2"><span class="text-green-400 font-bold">品牌复购:</span> 利用DSP或Email营销唤醒老客户，免费流量占比最大化。</li>`,
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">防御性广告:</span> 仅对核心大词投放SB品牌广告，防止竞品抢夺你的搜索流量。</li>`,
            `<li class="flex gap-2"><span class="text-green-400 font-bold">关联流量:</span> 你的产品已占据类目高位，主要靠FBT和类目导航自然出单。</li>`
        ];
    }

    if(stageLabel) stageLabel.innerText = stageText;
    if(paidEl) paidEl.innerText = `${Math.round(paidPct)}%`;
    if(freeEl) freeEl.innerText = `${Math.round(freePct)}%`;
    if(listEl) listEl.innerHTML = strategies.join('');
}

// 诊断工具逻辑
function diagnose() {
    const imp = document.getElementById('diag-impressions').value;
    const ctr = document.getElementById('diag-ctr').value;
    const cvr = document.getElementById('diag-cvr').value;
    const resultBox = document.getElementById('diag-result');
    const resultText = document.getElementById('diag-text');
    
    let message = "";

    if (imp === 'low') {
        message = "🚨 <strong>问题：流量入口太窄。</strong><br>你的产品根本没有被展示在客户面前。<br>👉 <strong>建议：</strong> 检查关键词是否收录？增加PPC广告预算；检查类目节点是否放对；尝试站外引流增加曝光。";
    } else if (ctr === 'low') {
        message = "⚠️ <strong>问题：主图/标题吸引力不足。</strong><br>很多客户看到了你的产品，但不想点进去。<br>👉 <strong>建议：</strong> 优化首图（差异化）；检查价格是否比竞品高太多；标题前50个字符是否突出了核心卖点；检查Review星级是否太低。";
    } else if (cvr === 'low') {
        message = "📉 <strong>问题：Listing内功不足。</strong><br>客户点进来了，但最后没买。<br>👉 <strong>建议：</strong> 优化五点描述和A+页面；检查是否有差评劝退；检查问答(QA)区是否有未解决的疑虑；对比竞品是否有价格劣势。";
    } else {
        message = "🚀 <strong>状态良好！</strong><br>如果三项指标都高，说明你正在打造爆款。<br>👉 <strong>建议：</strong> 保持库存充足，不要断货！断货会瞬间毁掉所有权重。可以考虑适当提价测试利润空间。";
    }

    if(resultText) resultText.innerHTML = message;
    if(resultBox) resultBox.classList.remove('hidden');
}

// ==========================================
// 5. 初始化 (Initialization)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 默认显示 SERP 视图
    lab.switchView('serp');
    // 默认应用 All 滤镜
    lab.filter('all');
    
    // 初始化 Deep Dive Tab
    showDeepDive('search');
    
    // 初始化策略计算器
    updateStrategy();
});
