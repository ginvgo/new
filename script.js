// --- 核心数据: Deep Dive Tabs ---
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
                    <h4 class="font-bold text-lg text-gray-900 mb-2">三大广告体系</h4>
                    <ul class="space-y-3 text-sm text-gray-600 mb-4">
                        <li><strong class="text-orange-600">Sponsored Products (SP):</strong> 关键词/ASIN定位。最基础也最重要，直接伪装成搜索结果。</li>
                        <li><strong class="text-orange-600">Sponsored Brands (SB):</strong> 品牌头条广告。位于搜索页最上方，包含Logo、标题和3个产品，适合推品牌。</li>
                        <li><strong class="text-orange-600">Sponsored Display (SD):</strong> 展示型广告。可定位到竞品详情页的购物车下方，甚至站外(Twitch等)进行再营销(Retargeting)。</li>
                    </ul>
                </div>
                <div class="bg-orange-50 p-5 rounded-lg border border-orange-100">
                    <h4 class="font-bold text-orange-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">trending_up</span> 投放技巧</h4>
                    <ul class="space-y-3 text-sm text-orange-800">
                        <li><strong>自动广告：</strong> 新品期必开，用于跑词(Harvesting Keywords)。</li>
                        <li><strong>精准否定：</strong> 定期下载Search Term Report，把只花钱不转化的词加入Negative Keywords。</li>
                        <li><strong>进攻竞品：</strong> 使用SD广告定位到比你贵、评分比你低的竞品ASIN详情页上，"以优打劣"。</li>
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
                    <h4 class="font-bold text-lg text-gray-900 mb-2">让亚马逊主动推荐你</h4>
                    <p class="mb-4 text-sm">关联流量是系统根据用户行为轨迹(浏览、加购、购买)自动匹配的免费流量。一旦形成关联，流量非常稳定。</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>Frequently Bought Together (FBT):</strong> 买了又买。通常是互补品（如手电筒+电池）。</li>
                        <li><strong>Compare with similar items:</strong> 系统抓取的相似品对比。</li>
                        <li><strong>Customers who viewed this...:</strong> 看了又看。</li>
                    </ul>
                </div>
                <div class="bg-purple-50 p-5 rounded-lg border border-purple-100">
                    <h4 class="font-bold text-purple-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">link</span> 蹭流量大法</h4>
                    <ul class="space-y-3 text-sm text-purple-800">
                        <li><strong>强制关联：</strong> 通过设置Bundle促销（购买A+B打折），人为制造"一起购买"的数据，久了系统就会自动生成FBT。</li>
                        <li><strong>广告定投：</strong> 长期用SP广告定位某个大牌竞品ASIN，出单多了，系统会判定你们强相关，从而给予免费关联推荐。</li>
                    </ul>
                </div>
            </div>
        `
    },
    browse: {
        title: "类目与活动 (Browse & Events)",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">节点与榜单</h4>
                    <p class="mb-2 text-sm">部分老派买家习惯通过左侧的类目树(Category Tree)层层筛选寻找产品。</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>节点准确性：</strong> 放错类目会导致流量归零。</li>
                        <li><strong>BSR榜单：</strong> 销量好的产品会有#1 Best Seller标，点击率翻倍。</li>
                        <li><strong>New Release：</strong> 新品榜单，这是新品弯道超车的机会。</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-5 rounded-lg border border-green-100">
                    <h4 class="font-bold text-green-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">event</span> 促销活动</h4>
                    <ul class="space-y-3 text-sm text-green-800">
                        <li><strong>Coupon：</strong> 绿色优惠券标，能显著提升CTR。</li>
                        <li><strong>Lightning Deal (LD):</strong> 秒杀活动。虽然要收费，但能在短时间内拉升BSR排名，排名上升后会带来更多自然流量。</li>
                        <li><strong>Prime Exclusive Discount:</strong> Prime专享折扣，大促期间必做。</li>
                    </ul>
                </div>
            </div>
        `
    },
    external: {
        title: "站外流量 (External Traffic)",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-bold text-lg text-gray-900 mb-2">突破瓶颈的关键</h4>
                    <p class="mb-4 text-sm">当站内PPC变得太贵，或者自然排名卡住时，站外流量是破局点。</p>
                    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4">
                        <li><strong>Deal Sites:</strong> 如Slickdeals，适合清库存或推爆款。</li>
                        <li><strong>Social Media:</strong> TikTok/Instagram Reels视频带货。</li>
                        <li><strong>Influencers:</strong> Amazon Associates (红人) 发布的带货文章。</li>
                    </ul>
                </div>
                <div class="bg-pink-50 p-5 rounded-lg border border-pink-100">
                    <h4 class="font-bold text-pink-800 mb-2 flex items-center gap-2"><span class="material-symbols-outlined">savings</span> 品牌引流奖励计划</h4>
                    <p class="text-sm text-pink-800 mb-2"><strong>Brand Referral Bonus:</strong> 亚马逊官方政策。如果你从站外(如Facebook广告)引流到亚马逊并产生销售，亚马逊会返还平均10%的销售佣金！</p>
                    <p class="text-xs text-pink-700">这意味着你的站外广告成本大幅降低，变相提高了利润率。</p>
                </div>
            </div>
        `
    }
};

// --- 全景流量实验室 (Traffic Lab) 逻辑 ---

const labData = {

    'sbv': {
        type: 'paid',
        title: 'Sponsored Brands Video',
        desc: '品牌视频广告。通常出现在搜索结果中部或底部。自动播放的视频能极大地吸引注意力，暂停时显示“静音”标志。',
        cost: 'CPC (按点击付费)',
        potential: '极高 (视觉冲击)',
        tip: '视频前3秒必须展示产品核心卖点。不要像拍电影一样铺垫，直接解决痛点。视频点击率通常是普通图片的2倍以上。'
    },
    'aplus': {
        type: 'free',
        title: 'A+ Content / Brand Story',
        desc: '图文版商品详情。包含品牌故事(Brand Story)和A+页面。这是展示品牌调性、解释复杂功能的核心区域。',
        cost: '免费 (需品牌备案)',
        potential: '高 (提升转化)',
        tip: 'Brand Story板块是可以左右滑动的，非常适合做店铺内互相导流（Cross-selling），把流量锁在自己的品牌闭环里。'
    },
    'compare': {
        type: 'free',
        title: 'Compare with similar items',
        desc: '相似商品对比表。系统根据浏览记录抓取的竞品对比。如果不进行干预，系统往往会推荐更便宜的竞品。',
        cost: '免费',
        potential: '中 (流量防御)',
        tip: '你无法关闭此功能，但可以通过优化Listing属性（如参数更全、功能更多）来让自己在对比中胜出。'
    },

    
    'sb': {
        type: 'paid',
        title: 'Sponsored Brands (SB)',
        desc: '品牌推广广告。位于搜索结果最顶部，包含Logo、标题和三个产品。它是打造品牌知名度和拦截竞品流量的最强入口。',
        cost: 'CPC (按点击付费)',
        potential: '高 (品牌认知)',
        tip: '务必测试自定义标题(Headline)和主图。如果你的产品评分低于4星，不要开这个广告，否则转化率极低。'
    },
    'sp': {
        type: 'paid',
        title: 'Sponsored Products (SP)',
        desc: '商品推广广告。外观与自然排名几乎一致。这是亚马逊转化率最高、流量最大的广告形式。',
        cost: 'CPC (按点击付费)',
        potential: '极高 (直接销售)',
        tip: '新品期建议开启自动广告(Auto)来跑词；成熟期利用手动广告(Manual)精准打击核心关键词。'
    },
    'organic': {
        type: 'free',
        title: 'Organic Ranking (自然排名)',
        desc: '通过A10算法获得的免费排名。不花钱，但需要极高的历史销量、点击率和好评率来维持。',
        cost: '免费 (时间成本)',
        potential: '稳定 (长期利润)',
        tip: '自然排名是“结果”不是“手段”。通过PPC广告出单推高销量后，自然排名自然会上升。'
    },
    'editorial': {
        type: 'free',
        title: 'Editorial Recommendations',
        desc: '编辑推荐。来自第三方权威媒体的文章摘要。占据搜索结果首页黄金位置，具有极强的背书效应。',
        cost: '免费 / 公关费',
        potential: '中 (信任背书)',
        tip: '通常需要通过亚马逊联盟(Amazon Associates)的红人或媒体合作才能获得，门槛较高。'
    },
    'sd': {
        type: 'paid',
        title: 'Sponsored Display (SD)',
        desc: '展示型推广。具有“侵略性”，常出现在竞品详情页的五点描述下或购物车下方，直接抢夺竞品流量。',
        cost: 'CPC / vCPM',
        potential: '中 (防御/进攻)',
        tip: '利用SD广告进行“再营销(Retargeting)”，定向投放给看过你产品但没买的人，ROI通常不错。'
    },
    'fbt': {
        type: 'free',
        title: 'Frequently Bought Together',
        desc: '经常一起购买。系统基于大数据自动生成的关联推荐。这是亚马逊最优质的免费关联流量。',
        cost: '免费',
        potential: '极高 (捆绑销售)',
        tip: '不要试图只卖单品。通过后台设置虚拟捆绑包(Virtual Bundle)人为增加两个产品同时购买的概率。'
    },
    'related': {
        type: 'paid',
        title: 'Related Products (Ads)',
        desc: '相关商品/四星推荐。详情页底部的长条轮播区域。这里实际上大部分是竞品购买的SP广告位。',
        cost: 'CPC',
        potential: '低 (捡漏)',
        tip: '在这个位置，你的主图必须比旁边的人更吸睛，价格更有优势，否则很容易成为陪跑。'
    }
};

const lab = {
    currentView: 'serp',
    currentFilter: 'all',
    
    init: function() {
        this.updateStats();
    },

    // 切换视图 (SERP / PDP)
    switchView: function(viewName) {
        this.currentView = viewName;
        
        // Update Canvas
        document.getElementById('lab-view-serp').classList.add('hidden');
        document.getElementById('lab-view-pdp').classList.add('hidden');
        document.getElementById(`lab-view-${viewName}`).classList.remove('hidden');

        // Update Tabs
        const btnSerp = document.getElementById('lab-tab-serp');
        const btnPdp = document.getElementById('lab-tab-pdp');
        
        const activeClass = ['bg-[#FF9900]', 'text-white', 'shadow'];
        const inactiveClass = ['text-gray-300', 'hover:text-white'];

        if(viewName === 'serp') {
            btnSerp.classList.add(...activeClass);
            btnSerp.classList.remove(...inactiveClass);
            btnPdp.classList.remove(...activeClass);
            btnPdp.classList.add(...inactiveClass);
        } else {
            btnPdp.classList.add(...activeClass);
            btnPdp.classList.remove(...inactiveClass);
            btnSerp.classList.remove(...activeClass);
            btnSerp.classList.add(...inactiveClass);
        }

        // Reset Selection
        this.resetInfoPanel();
        this.updateStats();
    },

    // 切换过滤器
    filter: function(type) {
        this.currentFilter = type;
        const container = document.getElementById('lab-canvas-container');
        const items = container.querySelectorAll('[data-type]');
        
        // Update Filter Buttons Style
        ['all', 'paid', 'free'].forEach(k => {
            const btn = document.getElementById(`lab-filter-${k}`);
            if(k === type) {
                btn.classList.add('ring-2', 'ring-blue-200', 'bg-blue-50', 'text-blue-700');
                btn.classList.remove('bg-white', 'text-gray-600');
            } else {
                btn.classList.remove('ring-2', 'ring-blue-200', 'bg-blue-50', 'text-blue-700');
                btn.classList.add('bg-white', 'text-gray-600');
            }
        });

        // Show/Hide Items
        items.forEach(item => {
            const itemType = item.getAttribute('data-type');
            if (type === 'all' || itemType === type) {
                item.style.display = ''; // Show
                item.style.opacity = '1';
            } else {
                item.style.opacity = '0.2'; // Dim instead of hide to keep layout
            }
        });
    },

    // 开启/关闭 X-Ray
    toggleXray: function() {
        const container = document.getElementById('lab-canvas-container');
        container.classList.toggle('xray-active');
    },

    // 选择某个元素
    select: function(key) {
        const data = labData[key];
        if(!data) return;

        // 1. Highlight Visual Item
        const allItems = document.querySelectorAll('[data-type]');
        allItems.forEach(el => el.classList.remove('lab-selected'));
        
        // 2. Update Info Panel
        document.getElementById('lab-info-placeholder').classList.add('hidden');
        const contentPanel = document.getElementById('lab-info-content');
        contentPanel.classList.remove('hidden');
        
        // Remove and re-add animation class
        contentPanel.classList.remove('panel-slide-in');
        void contentPanel.offsetWidth; // trigger reflow
        contentPanel.classList.add('panel-slide-in');

        // Populate Data
        document.getElementById('info-title').innerText = data.title;
        document.getElementById('info-desc').innerText = data.desc;
        document.getElementById('info-cost').innerText = data.cost;
        document.getElementById('info-potential').innerText = data.potential;
        document.getElementById('info-tip').innerText = data.tip;

        const badge = document.getElementById('info-badge');
        if(data.type === 'paid') {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700';
            badge.innerText = 'PAID TRAFFIC';
        } else {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700';
            badge.innerText = 'ORGANIC TRAFFIC';
        }
    },

    resetInfoPanel: function() {
        document.getElementById('lab-info-placeholder').classList.remove('hidden');
        document.getElementById('lab-info-content').classList.add('hidden');
    },

    updateStats: function() {
        // Calculate visible items based on current view
        const container = document.getElementById(`lab-view-${this.currentView}`);
        const paid = container.querySelectorAll('[data-type="paid"]').length;
        const free = container.querySelectorAll('[data-type="free"]').length;

        document.getElementById('stat-paid-count').innerText = paid;
        document.getElementById('stat-free-count').innerText = free;
    }
};


// --- Logic for Deep Dive Tabs ---
function showDeepDive(key) {
    const data = deepDiveData[key];
    const contentArea = document.getElementById('content-area');
    const deepDiveSection = document.getElementById('deep-dive');
    
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

    // Update Content with Fade Effect
    contentArea.style.opacity = 0;
    setTimeout(() => {
        contentArea.innerHTML = data.content;
        contentArea.style.opacity = 1;
    }, 200);
}

// --- Logic for Strategy Mixer ---
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

    stageLabel.innerText = stageText;
    paidEl.innerText = `${Math.round(paidPct)}%`;
    freeEl.innerText = `${Math.round(freePct)}%`;
    listEl.innerHTML = strategies.join('');
}

// --- Logic for Diagnostic Tool ---
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

    resultText.innerHTML = message;
    resultBox.classList.remove('hidden');
}


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Default Deep Dive Tab
    showDeepDive('search');
    
    // Initialize Strategy Mixer
    updateStrategy();
    
    // Initialize Lab
    lab.init();
});
