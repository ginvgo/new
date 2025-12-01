// --- Data for Deep Dive Section ---
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
// --- 整合版全景流量实验室逻辑 ---

const lab = {
    currentView: 'serp',
    currentFilter: 'all',

    // 切换视图 (SERP / PDP)
    switchView: function(viewName) {
        this.currentView = viewName;
        
        // 隐藏/显示 Canvas 内容
        document.getElementById('lab-view-serp').classList.add('hidden');
        document.getElementById('lab-view-pdp').classList.add('hidden');
        document.getElementById(`lab-view-${viewName}`).classList.remove('hidden');

        // 更新按钮状态
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
        
        // 切换视图时保持滤镜状态
        this.filter(this.currentFilter);
    },

    // 过滤器逻辑 (All/Paid/Free)
    filter: function(type) {
        this.currentFilter = type;
        const container = document.getElementById('lab-canvas-container');
        const items = container.querySelectorAll('[data-type]');
        
        // 更新按钮样式
        ['all', 'paid', 'free'].forEach(k => {
            const btn = document.getElementById(`lab-filter-${k}`);
            if(k === type) {
                btn.classList.add('ring-2', 'ring-blue-400', 'bg-white', 'shadow');
                btn.classList.remove('opacity-60');
            } else {
                btn.classList.remove('ring-2', 'ring-blue-400', 'bg-white', 'shadow');
                btn.classList.add('opacity-60');
            }
        });

        // 控制元素显示/透明度
        items.forEach(item => {
            const itemType = item.getAttribute('data-type');
            if (type === 'all' || itemType === type) {
                item.style.opacity = '1';
                item.style.filter = 'none';
                // 恢复热点交互
                const hotspot = item.querySelector('.hotspot-point');
                if(hotspot) hotspot.style.pointerEvents = 'auto';
            } else {
                item.style.opacity = '0.2';
                item.style.filter = 'grayscale(100%)';
                // 禁用被过滤掉的热点
                const hotspot = item.querySelector('.hotspot-point');
                if(hotspot) hotspot.style.pointerEvents = 'none';
            }
        });
    },

    // X-Ray 开关
    toggleXray: function() {
        const container = document.getElementById('lab-canvas-container');
        const toggleBtn = document.getElementById('xray-toggle');
        
        // 简单的 class 切换，样式由 CSS 控制
        if (toggleBtn.checked) {
            container.classList.add('xray-active');
        } else {
            container.classList.remove('xray-active');
        }
    }
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 默认显示 SERP
    lab.switchView('serp');
    lab.filter('all');
});

/* 保留底部的策略混合器和诊断工具逻辑 (原 Script 保持不变) */
// --- Logic for Deep Dive Tabs (保留) ---
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
    // ... (保留其他 deepDiveData 内容，ads, association 等) ...
    ads: {
        title: "广告流量 (Paid Traffic)",
        content: `<div class="p-4 bg-orange-50 text-orange-900 rounded">SP/SB/SD 三大广告体系是新品冷启动的关键。</div>`
    },
    association: {
         title: "关联流量 (Recommendation)",
         content: `<div class="p-4 bg-purple-50 text-purple-900 rounded">FBT和关联推荐是转化率最高的免费流量。</div>`
    },
    browse: { title: "类目与活动", content: "..." },
    external: { title: "站外流量", content: "..." }
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

// --- Strategy Mixer Logic (保留) ---
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
        strategies = [`<li>SP广告 (Auto) 跑词</li>`, `<li>VINE 计划</li>`];
    } else if (val < 70) {
        stageText = "销量增长期 (Growth)";
        paidPct = 50; freePct = 50;
        strategies = [`<li>SP广告 (Manual) 精准投放</li>`, `<li>秒杀活动冲排名</li>`];
    } else {
        stageText = "成熟盈利期 (Mature)";
        paidPct = 30; freePct = 70;
        strategies = [`<li>品牌防御广告</li>`, `<li>DSP 再营销</li>`];
    }

    if(stageLabel) stageLabel.innerText = stageText;
    if(paidEl) paidEl.innerText = `${Math.round(paidPct)}%`;
    if(freeEl) freeEl.innerText = `${Math.round(freePct)}%`;
    if(listEl) listEl.innerHTML = strategies.join('');
}

// --- Diagnostic Tool (保留) ---
function diagnose() {
    const imp = document.getElementById('diag-impressions').value;
    const resultBox = document.getElementById('diag-result');
    const resultText = document.getElementById('diag-text');
    let message = imp === 'low' ? "流量太少，检查关键词收录和广告预算。" : "流量正常，检查点击率和转化率。";
    if(resultText) resultText.innerHTML = message;
    if(resultBox) resultBox.classList.remove('hidden');
}

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
                // item.style.display = 'none'; // Optional: Completely hide
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
        
        // Find the specific item clicked (using event target would be better but simple logic here)
        // We add styling to the active element manually via onclick in HTML, 
        // but here we ensure global cleanup.
        const activeElement = document.activeElement;
        // Check if the click target corresponds to the key logic (simplified)
        
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

// Initialize Lab
document.addEventListener('DOMContentLoaded', () => {
    lab.init();
});
// --- Data for Hotspots Info ---
const hotspotInfo = {
    'sb-ads': {
        title: "Sponsored Brands (品牌推广)",
        desc: "占据搜索结果页最黄金的顶部位置。通常展示品牌Logo、一段自定义标题和3款产品。",
        tip: "适合有多款变体或产品线的品牌。记得测试不同的自定义标题(Headline)和主图，点击率差异巨大。"
    },
    'sp-ads': {
        title: "Sponsored Products (商品推广)",
        desc: "外观与自然搜索结果几乎一样，仅带灰色'Sponsored'小标。出现在搜索结果的头部、中部、底部及竞品详情页。",
        tip: "这是转化率最高的广告类型。新品初期建议开启'Auto'自动广告跑词，再转'Manual'手动精准投放。"
    },
    'organic': {
        title: "Organic Ranking (自然排名)",
        desc: "基于A10算法的自然搜索结果。不需付费，但需要极高的销量权重和关键词相关性。",
        tip: "主图决定点击率(CTR)，价格和评论决定转化率(CVR)。只有这两个指标好，自然排名才会稳。"
    },
    'editorial': {
        title: "Editorial Recommendations (编辑推荐)",
        desc: "来自第三方权威媒体(如CNN, Buzzfeed)的文章摘要。占据搜索结果首页极其显眼的版面。",
        tip: "这是目前门槛较高的流量入口。通常需要联系加入亚马逊Onsite Associates计划的媒体或通过服务商进行PR投放。"
    },
    'sd-ads': {
        title: "Sponsored Display (展示型推广)",
        desc: "出现在五点描述下方或购物车下方的Banner位。具有极强的侵略性。",
        tip: "利用SD广告进行'再营销(Retargeting)'，定向投放给那些看过你产品但没买的客户，ROI通常不错。"
    },
    'fbt': {
        title: "Frequently Bought Together (FBT)",
        desc: "详情页中部的打包购买推荐。这是亚马逊最强大的关联流量入口。",
        tip: "不要试图只卖单品。通过Listing文案引导，或者直接在后台设置Virtual Bundle，人为增加两个产品同时购买的概率。"
    },
    'related': {
        title: "Related Products / 4-Stars",
        desc: "详情页底部的长条轮播区域。这里是竞品广告的乱战区。",
        tip: "在这里，你的主图必须比旁边的人更吸睛，价格更有优势。否则你的流量会被竞品抢走。"
    }
};

// --- Logic for Tool 1: Visual Anatomy ---
function switchAnatomyView(viewName) {
    const serpView = document.getElementById('view-anatomy-serp');
    const pdpView = document.getElementById('view-anatomy-pdp');
    const btnSerp = document.getElementById('btn-anatomy-serp');
    const btnPdp = document.getElementById('btn-anatomy-pdp');
    const infoPanel = document.getElementById('info-panel');

    // Hide info panel when switching
    infoPanel.classList.add('hidden');

    if (viewName === 'serp') {
        serpView.classList.remove('hidden');
        pdpView.classList.add('hidden');
        
        btnSerp.classList.remove('text-gray-500', 'hover:text-gray-700');
        btnSerp.classList.add('bg-white', 'text-gray-800', 'shadow');
        
        btnPdp.classList.add('text-gray-500', 'hover:text-gray-700');
        btnPdp.classList.remove('bg-white', 'text-gray-800', 'shadow');
    } else {
        serpView.classList.add('hidden');
        pdpView.classList.remove('hidden');

        btnPdp.classList.remove('text-gray-500', 'hover:text-gray-700');
        btnPdp.classList.add('bg-white', 'text-gray-800', 'shadow');
        
        btnSerp.classList.add('text-gray-500', 'hover:text-gray-700');
        btnSerp.classList.remove('bg-white', 'text-gray-800', 'shadow');
    }
}

// --- Logic for Hotspot Click ---
function openInfo(key) {
    const data = hotspotInfo[key];
    const panel = document.getElementById('info-panel');
    
    document.getElementById('panel-title').innerText = data.title;
    document.getElementById('panel-desc').innerText = data.desc;
    document.getElementById('panel-tip').innerText = data.tip;
    
    panel.classList.remove('hidden');
    // Smooth scroll to panel
    panel.scrollIntoView({behavior: 'smooth', block: 'end'});
}

// --- Logic for Tool 2: Cost Filter ---
let currentFilter = 'all';

function applyFilter(type) {
    currentFilter = type;
    const containers = document.querySelectorAll('.hotspot-container');
    const btns = {
        all: document.getElementById('filter-all'),
        free: document.getElementById('filter-free'),
        paid: document.getElementById('filter-paid')
    };

    // Update Button States
    Object.keys(btns).forEach(key => {
        if(key === type) {
            btns[key].classList.remove('opacity-50');
            btns[key].classList.add('opacity-100', 'ring-2', 'ring-offset-1', 'ring-gray-300');
        } else {
            btns[key].classList.add('opacity-50');
            btns[key].classList.remove('opacity-100', 'ring-2', 'ring-offset-1', 'ring-gray-300');
        }
    });

    // Update Elements Visibility
    containers.forEach(el => {
        const elType = el.getAttribute('data-type');
        if (type === 'all' || elType === type) {
            el.classList.remove('opacity-20', 'grayscale');
            el.classList.add('opacity-100');
            // Ensure pointer events are active
            el.querySelector('.hotspot-marker').style.pointerEvents = 'auto';
        } else {
            el.classList.remove('opacity-100');
            el.classList.add('opacity-20', 'grayscale');
            // Disable clicking on dimmed elements
            el.querySelector('.hotspot-marker').style.pointerEvents = 'none';
        }
    });
}

function switchCostView(viewName) {
    const serpView = document.getElementById('view-cost-serp');
    const pdpView = document.getElementById('view-cost-pdp');
    const btnSerp = document.getElementById('btn-cost-serp');
    const btnPdp = document.getElementById('btn-cost-pdp');

    if (viewName === 'serp') {
        serpView.classList.remove('hidden');
        pdpView.classList.add('hidden');
        
        btnSerp.classList.remove('text-gray-500', 'hover:text-gray-700');
        btnSerp.classList.add('bg-white', 'text-gray-800', 'shadow');
        
        btnPdp.classList.add('text-gray-500', 'hover:text-gray-700');
        btnPdp.classList.remove('bg-white', 'text-gray-800', 'shadow');
    } else {
        serpView.classList.add('hidden');
        pdpView.classList.remove('hidden');

        btnPdp.classList.remove('text-gray-500', 'hover:text-gray-700');
        btnPdp.classList.add('bg-white', 'text-gray-800', 'shadow');
        
        btnSerp.classList.add('text-gray-500', 'hover:text-gray-700');
        btnSerp.classList.remove('bg-white', 'text-gray-800', 'shadow');
    }
    // Re-apply current filter to new view elements
    applyFilter(currentFilter);
}


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

    // Scroll if needed (optional logic, kept simple here)
}

function getHoverColor(key) {
    const map = {
        search: 'blue',
        ads: 'orange',
        association: 'purple',
        browse: 'green',
        external: 'pink'
    };
    return map[key];
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
    
    // Initialize Cost Filter
    applyFilter('all');
});
