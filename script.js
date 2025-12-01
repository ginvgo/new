// --- 数据源：流量实验室详情 ---
const labData = {
    'sb': {
        type: 'paid',
        title: 'Sponsored Brands (SB)',
        desc: '品牌推广广告。位于搜索结果最顶部，通常包含品牌 Logo、一段自定义标题和三款精选产品。它是打造品牌知名度和拦截竞品流量的最强入口。',
        cost: 'CPC (按点击付费)',
        potential: '高 (品牌认知 + 转化)',
        tip: '务必测试不同的自定义标题 (Headline) 和主图。如果你的产品评分低于 4.0 星，建议先优化评论再投放，否则转化率极低。'
    },
    'sp': {
        type: 'paid',
        title: 'Sponsored Products (SP)',
        desc: '商品推广广告。外观与自然排名几乎一致，仅带有灰色的 "Sponsored" 小标。这是亚马逊转化率最高、流量最大的广告形式，也是新品冷启动的核心。',
        cost: 'CPC (按点击付费)',
        potential: '极高 (直接销售)',
        tip: '新品期建议开启自动广告 (Auto) 来跑词；成熟期利用手动广告 (Manual) 精准打击核心关键词。'
    },
    'organic': {
        type: 'free',
        title: 'Organic Ranking (自然排名)',
        desc: '通过 A10 算法获得的免费排名。不花钱，但需要极高的历史销量、点击率 (CTR) 和转化率 (CVR) 来维持。',
        cost: '免费 (时间与运营成本)',
        potential: '稳定 (长期利润来源)',
        tip: '自然排名是“结果”不是“手段”。通过 PPC 广告出单推高销量后，自然排名自然会上升。'
    },
    'editorial': {
        type: 'free',
        title: 'Editorial Recommendations',
        desc: '编辑推荐。来自第三方权威媒体 (如 CNN, Buzzfeed) 的文章摘要。占据搜索结果首页黄金位置，具有极强的信任背书效应。',
        cost: '免费 / 公关费用',
        potential: '中 (信任背书)',
        tip: '通常需要通过亚马逊联盟 (Amazon Associates) 的红人或媒体合作才能获得，门槛较高。'
    },
    'sd': {
        type: 'paid',
        title: 'Sponsored Display (SD)',
        desc: '展示型推广。具有“侵略性”，常出现在竞品详情页的五点描述下或购物车下方，直接抢夺竞品流量。',
        cost: 'CPC / vCPM',
        potential: '中 (防御/进攻)',
        tip: '利用 SD 广告进行“再营销 (Retargeting)”，定向投放给那些看过你产品但没买的人，ROI 通常不错。'
    },
    'fbt': {
        type: 'free',
        title: 'Frequently Bought Together',
        desc: '经常一起购买。系统基于大数据用户行为自动生成的关联推荐。这是亚马逊最优质的免费关联流量。',
        cost: '免费',
        potential: '极高 (捆绑销售)',
        tip: '不要试图只卖单品。通过后台设置虚拟捆绑包 (Virtual Bundle) 人为增加两个产品同时购买的概率，加速 FBT 的形成。'
    },
    'related': {
        type: 'paid',
        title: 'Related Products (Ads)',
        desc: '相关商品/四星推荐。详情页底部的长条轮播区域。这里实际上大部分是竞品购买的 SP 广告位，是流量流失的主要区域。',
        cost: 'CPC',
        potential: '低 (捡漏)',
        tip: '在这个位置，你的主图必须比旁边的人更吸睛，价格更有优势，否则很容易成为陪跑。'
    }
};

// --- 数据源：深度解析 ---
const deepDiveData = {
    search: {
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
                    <h4 class="font-bold text-[#007185] mb-2 flex items-center gap-2"><span class="material-symbols-outlined">lightbulb</span> 运营策略</h4>
                    <ul class="space-y-3 text-sm text-gray-800">
                        <li><strong>埋词 (SEO)：</strong> 利用工具(Helium 10/JS)反查竞品流量词，埋入Listing标题和ST中。</li>
                        <li><strong>长尾词打法：</strong> 新品不要硬刚大词，先打长尾词积累权重。</li>
                    </ul>
                </div>
            </div>`
    },
    ads: {
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">三大广告体系</h4>
                    <ul class="space-y-3 text-sm text-gray-600 mb-4">
                        <li><strong class="text-[#E77600]">Sponsored Products (SP):</strong> 关键词/ASIN定位。最基础也最重要。</li>
                        <li><strong class="text-[#E77600]">Sponsored Brands (SB):</strong> 品牌头条广告。适合推品牌。</li>
                        <li><strong class="text-[#E77600]">Sponsored Display (SD):</strong> 展示型广告。再营销(Retargeting)利器。</li>
                    </ul>
                </div>
                <div class="bg-orange-50 p-5 rounded-lg border border-orange-100">
                    <h4 class="font-bold text-[#B12704] mb-2 flex items-center gap-2"><span class="material-symbols-outlined">trending_up</span> 投放技巧</h4>
                    <ul class="space-y-3 text-sm text-gray-800">
                        <li><strong>精准否定：</strong> 定期下载Search Term Report，把只花钱不转化的词加入Negative Keywords。</li>
                        <li><strong>进攻竞品：</strong> 使用SD广告定位到比你贵、评分比你低的竞品ASIN详情页上。</li>
                    </ul>
                </div>
            </div>`
    },
    association: {
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">让亚马逊主动推荐你</h4>
                    <p class="mb-4 text-sm">关联流量是系统根据用户行为轨迹(浏览、加购、购买)自动匹配的免费流量。</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>FBT (买了又买):</strong> 通常是互补品（如手电筒+电池）。</li>
                        <li><strong>Compare with similar items:</strong> 系统抓取的相似品对比。</li>
                    </ul>
                </div>
                <div class="bg-purple-50 p-5 rounded-lg border border-purple-100">
                    <h4 class="font-bold text-purple-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">link</span> 蹭流量大法</h4>
                    <ul class="space-y-3 text-sm text-gray-800">
                        <li><strong>强制关联：</strong> 通过设置Bundle促销，人为制造"一起购买"的数据。</li>
                        <li><strong>广告定投：</strong> 长期用SP广告定位某个大牌竞品ASIN，建立强相关性。</li>
                    </ul>
                </div>
            </div>`
    },
    browse: { content: `<div class="p-4 bg-gray-50 text-sm">类目节点准确性至关重要。利用 Coupon 和 Lightning Deal (LD) 可以在短时间内拉升 BSR 排名。</div>` },
    external: { content: `<div class="p-4 bg-gray-50 text-sm">站外流量是突破瓶颈的关键。利用 Brand Referral Bonus 计划，亚马逊会返还平均 10% 的销售佣金。</div>` }
};

// --- 全景流量实验室 (Lab) 逻辑 ---
const lab = {
    currentView: 'serp',
    
    init: function() {
        this.updateStats();
    },

    // 切换视图 (SERP / PDP)
    switchView: function(viewName) {
        this.currentView = viewName;
        
        // Update Canvas Visibility
        document.getElementById('lab-view-serp').classList.add('hidden');
        document.getElementById('lab-view-pdp').classList.add('hidden');
        document.getElementById(`lab-view-${viewName}`).classList.remove('hidden');

        // Update Tab Styles
        const btnSerp = document.getElementById('lab-tab-serp');
        const btnPdp = document.getElementById('lab-tab-pdp');
        
        const activeClass = ['bg-[#F0F2F2]', 'border-gray-300', 'shadow-inner', 'font-bold', 'text-[#0F1111]'];
        const inactiveClass = ['bg-white', 'border-transparent', 'font-normal', 'text-gray-600', 'hover:bg-gray-50'];

        if(viewName === 'serp') {
            btnSerp.className = `px-4 py-1.5 rounded text-sm border ${activeClass.join(' ')}`;
            btnPdp.className = `px-4 py-1.5 rounded text-sm border ${inactiveClass.join(' ')}`;
        } else {
            btnPdp.className = `px-4 py-1.5 rounded text-sm border ${activeClass.join(' ')}`;
            btnSerp.className = `px-4 py-1.5 rounded text-sm border ${inactiveClass.join(' ')}`;
        }

        this.updateStats();
    },

    // 切换 X-Ray 模式
    toggleXray: function() {
        const container = document.getElementById('lab-canvas-container');
        container.classList.toggle('xray-active');
    },

    // 打开模态框
    openModal: function(key) {
        const data = labData[key];
        if(!data) return;

        // Populate Data
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-cost').innerText = data.cost;
        document.getElementById('modal-potential').innerText = data.potential;
        document.getElementById('modal-tip').innerText = data.tip;

        const badge = document.getElementById('modal-badge');
        if(data.type === 'paid') {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-[#E77600] border border-orange-200';
            badge.innerText = 'Paid Traffic';
        } else {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-[#007600] border border-green-200';
            badge.innerText = 'Organic Traffic';
        }

        // Show Modal
        const backdrop = document.getElementById('lab-modal-backdrop');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    },

    // 关闭模态框
    closeModal: function(event) {
        // If event is present, ensure we clicked the backdrop, not content
        if(event && event.target !== event.currentTarget) return;

        const backdrop = document.getElementById('lab-modal-backdrop');
        backdrop.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    },

    // 更新统计数据
    updateStats: function() {
        const container = document.getElementById(`lab-view-${this.currentView}`);
        // Count elements based on class names used for X-Ray
        const paid = container.querySelectorAll('.xray-item-paid').length;
        const free = container.querySelectorAll('.xray-item-free').length;

        document.getElementById('stat-paid-count').innerText = paid;
        document.getElementById('stat-free-count').innerText = free;
    }
};

// --- 深度解析 (Deep Dive) 逻辑 ---
function showDeepDive(key) {
    const data = deepDiveData[key];
    const contentArea = document.getElementById('content-area');
    
    // Update Tab Styles
    ['search', 'ads', 'association', 'browse', 'external'].forEach(k => {
        const btn = document.getElementById(`tab-${k}`);
        if (k === key) {
            btn.classList.add('tab-active');
            btn.classList.remove('tab-inactive');
        } else {
            btn.classList.remove('tab-active');
            btn.classList.add('tab-inactive');
        }
    });

    // Content Update
    contentArea.style.opacity = 0;
    setTimeout(() => {
        contentArea.innerHTML = data.content;
        contentArea.style.opacity = 1;
    }, 200);
}

// --- 策略配比计算器逻辑 ---
function updateStrategy() {
    const val = parseInt(document.getElementById('stage-slider').value);
    const stageLabel = document.getElementById('stage-label');
    const paidEl = document.getElementById('paid-percent');
    const freeEl = document.getElementById('free-percent');
    const listEl = document.getElementById('strategy-list');

    let paidPct, freePct, stageText, strategies;

    if (val < 30) {
        stageText = "新品推广期 (Launch)";
        paidPct = Math.max(70, 100 - val);
        freePct = 100 - paidPct;
        strategies = [
            `<li class="flex gap-2"><span class="text-[#E77600] font-bold">SP广告 (Auto):</span> 必须开启，用于跑词。</li>`,
            `<li class="flex gap-2"><span class="text-[#E77600] font-bold">VINE计划:</span> 付费获取前30个Review。</li>`,
            `<li class="flex gap-2"><span class="text-[#E77600] font-bold">Coupon:</span> 设置大额优惠券点击率。</li>`
        ];
    } else if (val < 70) {
        stageText = "销量增长期 (Growth)";
        paidPct = 50; 
        freePct = 50;
        strategies = [
            `<li class="flex gap-2"><span class="text-[#E77600] font-bold">SP广告 (Manual):</span> 精准投放，控制ACOS。</li>`,
            `<li class="flex gap-2"><span class="text-[#007600] font-bold">SEO优化:</span> 将高转化词埋入Listing。</li>`,
            `<li class="flex gap-2"><span class="text-[#E77600] font-bold">LD秒杀:</span> 冲刺 BSR 排名。</li>`
        ];
    } else {
        stageText = "成熟盈利期 (Mature)";
        paidPct = Math.max(10, 40 - (val-70));
        freePct = 100 - paidPct;
        strategies = [
            `<li class="flex gap-2"><span class="text-[#007600] font-bold">品牌复购:</span> 利用DSP唤醒老客户。</li>`,
            `<li class="flex gap-2"><span class="text-[#E77600] font-bold">防御性广告:</span> 仅投放品牌词 SB 广告。</li>`,
            `<li class="flex gap-2"><span class="text-[#007600] font-bold">关联流量:</span> 靠 FBT 和类目自然出单。</li>`
        ];
    }

    stageLabel.innerText = stageText;
    paidEl.innerText = `${Math.round(paidPct)}%`;
    freeEl.innerText = `${Math.round(freePct)}%`;
    listEl.innerHTML = strategies.join('');
}

// --- 健康诊断逻辑 ---
function diagnose() {
    const imp = document.getElementById('diag-impressions').value;
    const ctr = document.getElementById('diag-ctr').value;
    const cvr = document.getElementById('diag-cvr').value;
    const resultBox = document.getElementById('diag-result');
    
    let message = "";
    if (imp === 'low') {
        message = "🚨 <strong>问题：流量入口太窄。</strong><br>建议：增加 PPC 预算；检查关键词收录；尝试站外引流。";
    } else if (ctr === 'low') {
        message = "⚠️ <strong>问题：主图/标题吸引力不足。</strong><br>建议：优化首图差异化；检查价格竞争力；检查 Review 星级。";
    } else if (cvr === 'low') {
        message = "📉 <strong>问题：Listing 内功不足。</strong><br>建议：优化五点描述；检查差评；对比竞品价格优势。";
    } else {
        message = "🚀 <strong>状态良好！</strong><br>建议：保持库存充足，防止断货。";
    }
    resultBox.innerHTML = message;
    resultBox.classList.remove('hidden');
}

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    lab.init();
    showDeepDive('search');
    updateStrategy();
});
