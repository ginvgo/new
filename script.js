// --- 全景流量实验室 (Traffic Lab) 逻辑 ---

const labData = {
    'sb': {
        type: 'paid',
        title: 'Sponsored Brands (SB)',
        desc: '品牌推广广告（旧称头条广告）。位于搜索结果页最顶部，包含品牌 Logo、自定义标题和三个精选产品。',
        cost: 'CPC (按点击付费)',
        potential: '高 (品牌认知 + 销售)',
        content: `
            <div class="space-y-4 text-sm text-gray-700">
                <p>这是拦截流量的第一道防线。适合有多款变体或产品线的品牌卖家。</p>
                <div class="bg-blue-50 p-3 rounded border border-blue-100">
                    <strong class="text-blue-800 block mb-1">关键优势：</strong>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>位置霸权：</strong> 占据屏幕最上方，移动端几乎占满首屏。</li>
                        <li><strong>自定义创意：</strong> 可以写吸睛的标语 (Headline) 和自定义图片。</li>
                        <li><strong>品牌旗舰店：</strong> 点击 Logo 可直接跳转到 Storefront，防止流量外流。</li>
                    </ul>
                </div>
                <div class="border-l-4 border-orange-500 pl-3 py-1 bg-gray-50">
                    <strong class="text-orange-600 text-xs uppercase">实战技巧</strong>
                    <p class="text-xs mt-1">测试 "Lifestyle Image" (场景图) 作为主图，点击率通常比纯白底图高 20% 以上。</p>
                </div>
            </div>
        `
    },
    'sbv': {
        type: 'paid',
        title: 'Sponsored Brands Video (SBV)',
        desc: '品牌推广视频广告。在搜索结果中间展示一段自动播放的视频。',
        cost: 'CPC',
        potential: '极高 (点击率之王)',
        content: `
            <div class="space-y-4 text-sm text-gray-700">
                <p>目前亚马逊上点击率 (CTR) 和转化率 (CVR) 表现最好的广告形式之一。</p>
                <div class="bg-green-50 p-3 rounded border border-green-100">
                    <strong class="text-green-800 block mb-1">为什么它有效？</strong>
                    <p>在静止的图片搜索结果中，动态视频极其吸睛。大部分买家会停下来观看前 3 秒。</p>
                </div>
                <div class="border-l-4 border-orange-500 pl-3 py-1 bg-gray-50">
                    <strong class="text-orange-600 text-xs uppercase">实战技巧</strong>
                    <p class="text-xs mt-1">视频必须在静音状态下也能看懂！前 3 秒必须展示产品核心痛点或使用场景。</p>
                </div>
            </div>
        `
    },
    'sp': {
        type: 'paid',
        title: 'Sponsored Products (SP)',
        desc: '商品推广广告。外观与自然排名几乎一致，仅多了一个灰色 "Sponsored" 标。',
        cost: 'CPC',
        potential: '极高 (直接出单)',
        content: `
            <div class="space-y-4 text-sm text-gray-700">
                <p>亚马逊广告的基石。出现在搜索结果的顶部、中部、底部以及竞品详情页。</p>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-100 p-2 rounded">
                        <div class="font-bold text-xs">自动广告 (Auto)</div>
                        <div class="text-xs text-gray-500">用于跑词，系统自动匹配。</div>
                    </div>
                    <div class="bg-gray-100 p-2 rounded">
                        <div class="font-bold text-xs">手动广告 (Manual)</div>
                        <div class="text-xs text-gray-500">精准打击核心词，控制 ACOS。</div>
                    </div>
                </div>
                <div class="border-l-4 border-orange-500 pl-3 py-1 bg-gray-50">
                    <strong class="text-orange-600 text-xs uppercase">实战技巧</strong>
                    <p class="text-xs mt-1">新品期建议 Auto 广告预算给足，利用它来验证亚马逊是否正确识别了你的产品类目。</p>
                </div>
            </div>
        `
    },
    'organic': {
        type: 'free',
        title: 'Organic Ranking (自然排名)',
        desc: '通过 A10 算法获得的免费排名。不花钱，但需要极高的历史销量权重。',
        cost: '0 (时间成本)',
        potential: '稳定 (长期利润来源)',
        content: `
            <div class="space-y-4 text-sm text-gray-700">
                <p>这是所有卖家梦寐以求的位置。不需要支付点击费，利润率最高。</p>
                <div class="bg-blue-50 p-3 rounded border border-blue-100">
                    <strong class="text-blue-800 block mb-1">影响排名的核心因素：</strong>
                    <ul class="list-disc pl-5 space-y-1 text-xs">
                        <li><strong>点击率 (CTR) & 转化率 (CVR)：</strong> 这是算法最看重的。</li>
                        <li><strong>近期销量：</strong> 即使是老品，如果最近销量跌了，排名也会掉。</li>
                        <li><strong>关键词相关性：</strong> 标题和五点描述必须埋词准确。</li>
                    </ul>
                </div>
            </div>
        `
    },
    'sd': {
        type: 'paid',
        title: 'Sponsored Display (SD)',
        desc: '展示型推广。常出现在竞品详情页的五点描述下或购物车下方。',
        cost: 'CPC / vCPM',
        potential: '中 (防御/进攻/再营销)',
        content: `
            <div class="space-y-4 text-sm text-gray-700">
                <p>具有极强的“侵略性”。它不像 SP 广告那样依赖关键词，而是依赖“人群”和“ASIN”。</p>
                <div class="bg-purple-50 p-3 rounded border border-purple-100">
                    <strong class="text-purple-800 block mb-1">三大玩法：</strong>
                    <ul class="list-disc pl-5 space-y-1 text-xs">
                        <li><strong>进攻竞品：</strong> 定位到比你贵、评分比你差的竞品页面上。</li>
                        <li><strong>防御自家：</strong> 定位到自己的 ASIN 上，防止竞品蹭流量。</li>
                        <li><strong>再营销 (Retargeting)：</strong> 追踪看过你产品但没买的人。</li>
                    </ul>
                </div>
            </div>
        `
    },
    'fbt': {
        type: 'free',
        title: 'Frequently Bought Together (FBT)',
        desc: '经常一起购买。系统基于大数据自动生成的关联推荐。',
        cost: '免费',
        potential: '极高 (关联出单)',
        content: `
            <div class="space-y-4 text-sm text-gray-700">
                <p>亚马逊最优质的免费流量入口。通常出现在详情页中部，转化率极高。</p>
                <div class="bg-green-50 p-3 rounded border border-green-100">
                    <strong class="text-green-800 block mb-1">如何获得 FBT？</strong>
                    <p class="text-xs">你需要让亚马逊算法看到“A 和 B 经常被同一个订单购买”。</p>
                </div>
                <div class="border-l-4 border-orange-500 pl-3 py-1 bg-gray-50">
                    <strong class="text-orange-600 text-xs uppercase">黑科技技巧</strong>
                    <p class="text-xs mt-1">在后台设置 "Virtual Bundle" (虚拟捆绑包)，人为制造两个产品同时购买的数据，一段时间后系统会自动生成 FBT 关联。</p>
                </div>
            </div>
        `
    },
    'aplus': {
        type: 'free',
        title: 'A+ Content (图文详情页)',
        desc: '通过丰富的图文、对比表格展示产品细节。',
        cost: '免费 (需品牌备案)',
        potential: '高 (提升转化率)',
        content: `
            <div class="space-y-4 text-sm text-gray-700">
                <p>A+ 页面不直接带来流量，但能显著提升流量进来后的<strong>转化率</strong> (CVR)。</p>
                <div class="bg-gray-100 p-3 rounded">
                    <strong class="block mb-1">对比表格 (Comparison Chart)</strong>
                    <p class="text-xs text-gray-500">这是 A+ 中最有价值的模块。你可以列出自己店铺的其他产品进行对比，既能突出当前产品的优势，又能为自家其他产品引流，防止客户流失。</p>
                </div>
            </div>
        `
    }
};

const lab = {
    currentView: 'serp',
    currentFilter: 'all',

    // 切换视图 (SERP / PDP)
    switchView: function(viewName) {
        this.currentView = viewName;
        
        // 隐藏/显示内容
        document.getElementById('lab-view-serp').classList.add('hidden');
        document.getElementById('lab-view-pdp').classList.add('hidden');
        document.getElementById(`lab-view-${viewName}`).classList.remove('hidden');

        // 更新 Tab 样式
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
        
        this.filter(this.currentFilter);
    },

    // 切换设备模拟 (Desktop / Mobile)
    setDevice: function(device) {
        const wrapper = document.getElementById('lab-canvas-wrapper');
        const btnDesktop = document.getElementById('btn-device-desktop');
        const btnMobile = document.getElementById('btn-device-mobile');
        
        if (device === 'mobile') {
            wrapper.classList.add('mobile-mode');
            btnMobile.classList.add('text-white');
            btnMobile.classList.remove('text-gray-400');
            btnDesktop.classList.remove('text-white');
            btnDesktop.classList.add('text-gray-400');
        } else {
            wrapper.classList.remove('mobile-mode');
            btnDesktop.classList.add('text-white');
            btnDesktop.classList.remove('text-gray-400');
            btnMobile.classList.remove('text-white');
            btnMobile.classList.add('text-gray-400');
        }
    },

    // 过滤器逻辑
    filter: function(type) {
        this.currentFilter = type;
        const container = document.getElementById('lab-canvas-container');
        const items = container.querySelectorAll('[data-type]');
        
        ['all', 'paid', 'free'].forEach(k => {
            const btn = document.getElementById(`lab-filter-${k}`);
            if(k === type) {
                btn.classList.add('ring-2', 'ring-blue-400', 'bg-white', 'shadow', 'text-black');
                btn.classList.remove('bg-gray-800', 'text-white', 'hover:bg-white', 'hover:shadow');
                if(k === 'all') btn.classList.remove('text-white'); // Fix text color for all
            } else {
                btn.classList.remove('ring-2', 'ring-blue-400', 'bg-white', 'shadow', 'text-black');
                if(k === 'all') btn.classList.add('bg-gray-800', 'text-white');
                else btn.classList.add('hover:bg-white', 'hover:shadow');
            }
        });

        items.forEach(item => {
            const itemType = item.getAttribute('data-type');
            if (type === 'all' || itemType === type) {
                item.style.display = ''; 
                item.style.opacity = '1';
                item.style.filter = 'none';
                const hotspot = item.querySelector('.hotspot-point');
                if(hotspot) hotspot.style.pointerEvents = 'auto';
            } else {
                item.style.opacity = '0.3';
                item.style.filter = 'grayscale(100%) blur(1px)';
                const hotspot = item.querySelector('.hotspot-point');
                if(hotspot) hotspot.style.pointerEvents = 'none';
            }
        });
    },

    // X-Ray 开关
    toggleXray: function() {
        const container = document.getElementById('lab-canvas-container');
        const toggleBtn = document.getElementById('xray-toggle');
        // Toggle checkbox state if called from non-label click
        if (event.target.tagName !== 'INPUT') {
            toggleBtn.checked = !toggleBtn.checked;
        }
        
        if (toggleBtn.checked) {
            container.classList.add('xray-active');
        } else {
            container.classList.remove('xray-active');
        }
    },

    // 模态框逻辑
    openModal: function(key) {
        const data = labData[key] || labData['sp'];
        const modal = document.getElementById('modal-overlay');
        const title = document.getElementById('modal-title');
        const body = document.getElementById('modal-body');

        // Set Content
        title.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-sm px-2 py-0.5 rounded ${data.type === 'paid' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'} uppercase font-bold tracking-wider">${data.type === 'paid' ? 'Paid Traffic' : 'Organic Traffic'}</span>
                <span>${data.title}</span>
            </div>
        `;
        
        body.innerHTML = `
            <p class="text-gray-800 font-medium mb-4 text-base">${data.desc}</p>
            <div class="flex gap-4 mb-6 text-sm border-b border-gray-100 pb-4">
                <div>
                    <span class="block text-xs text-gray-500">成本模式</span>
                    <span class="font-bold">${data.cost}</span>
                </div>
                <div>
                    <span class="block text-xs text-gray-500">潜力等级</span>
                    <span class="font-bold">${data.potential}</span>
                </div>
            </div>
            ${data.content}
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll
    },

    closeModal: function(e) {
        // If e is present, check if click target is overlay
        if (e && !e.target.classList.contains('modal-overlay')) return;
        
        document.getElementById('modal-overlay').classList.remove('active');
        document.body.style.overflow = ''; // Enable scroll
    }
};

// --- Strategy Mixer Logic ---
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
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">SP广告 (Auto):</span> 必须开启，跑词。</li>`,
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">VINE计划:</span> 付费获取首批评论。</li>`
        ];
    } else if (val < 70) {
        stageText = "销量增长期 (Growth)";
        paidPct = 50; freePct = 50;
        strategies = [
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">秒杀 (LD):</span> 冲刺 BSR 排名。</li>`,
            `<li class="flex gap-2"><span class="text-green-400 font-bold">SEO优化:</span> 埋入高转化广告词。</li>`
        ];
    } else {
        stageText = "成熟盈利期 (Mature)";
        paidPct = 30; freePct = 70;
        strategies = [
            `<li class="flex gap-2"><span class="text-green-400 font-bold">品牌复购:</span> 降低广告依赖。</li>`,
            `<li class="flex gap-2"><span class="text-orange-400 font-bold">防御广告:</span> 保护品牌词流量。</li>`
        ];
    }

    if(stageLabel) stageLabel.innerText = stageText;
    if(paidEl) paidEl.innerText = `${Math.round(paidPct)}%`;
    if(freeEl) freeEl.innerText = `${Math.round(freePct)}%`;
    if(listEl) listEl.innerHTML = strategies.join('');
}

// --- Diagnostic Tool ---
function diagnose() {
    const imp = document.getElementById('diag-impressions').value;
    const ctr = document.getElementById('diag-ctr').value;
    const cvr = document.getElementById('diag-cvr').value;
    const resultBox = document.getElementById('diag-result');
    
    let msg = "";
    if (imp === 'low') msg = "🚨 <strong>流量入口太窄。</strong><br>建议：增加广告预算，检查类目节点是否准确，或尝试站外引流。";
    else if (ctr === 'low') msg = "⚠️ <strong>主图/标题吸引力不足。</strong><br>建议：测试差异化首图，检查价格是否过高，Review评分是否过低。";
    else if (cvr === 'low') msg = "📉 <strong>Listing 内功不足。</strong><br>建议：优化五点描述和 A+ 页面，检查是否有差评劝退。";
    else msg = "🚀 <strong>状态良好！</strong><br>建议：保持库存，不要断货。可以尝试适当提价测试利润空间。";

    if(resultBox) {
        resultBox.innerHTML = msg;
        resultBox.classList.remove('hidden');
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    lab.switchView('serp');
    lab.filter('all');
    updateStrategy();
});
