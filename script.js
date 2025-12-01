// --- 全景流量实验室数据源 ---
const labData = {
    // === PAID TRAFFIC ===
    'sb': {
        type: 'paid',
        title: 'Sponsored Brands (品牌推广)',
        desc: '位于搜索结果最顶部的“品牌头条”。包含Logo、一段自定义标题和3个产品。这是打造品牌知名度和拦截竞品流量的最强入口。点击Logo会进入品牌旗舰店(Store)。',
        cost: 'CPC (按点击付费)',
        potential: '高 (品牌认知)',
        tip: '务必测试不同的自定义标题(Headline)和主图。如果你的产品评分低于4星，不要开这个广告，否则转化率极低。'
    },
    'sbv': {
        type: 'paid',
        title: 'Sponsored Brands Video (品牌视频)',
        desc: '在搜索结果中层出现的自动播放视频广告。通常占据整行宽度，极为吸睛。移动端转化率通常高于桌面端。',
        cost: 'CPC (按点击付费)',
        potential: '极高 (视觉冲击)',
        tip: '视频前3秒必须展示痛点或产品核心卖点。不要把视频做成纯粹的品牌形象片，要简单粗暴地展示功能。'
    },
    'sp': {
        type: 'paid',
        title: 'Sponsored Products (商品推广)',
        desc: '最基础的“商品推广”。外观与自然排名几乎一致，仅多了一个灰色 "Sponsored" 标。这是亚马逊转化率最高、流量最大的广告形式。',
        cost: 'CPC (按点击付费)',
        potential: '极高 (直接销售)',
        tip: '新品期建议开启自动广告(Auto)来跑词；成熟期利用手动广告(Manual)精准打击核心关键词。'
    },
    'sd': {
        type: 'paid',
        title: 'Sponsored Display (展示型推广)',
        desc: '具有极强的“侵略性”，常出现在竞品详情页的五点描述下或购物车下方，直接抢夺正在考虑购买的客户。也可用于站外再营销。',
        cost: 'CPC 或 vCPM',
        potential: '中 (防御/进攻)',
        tip: '利用SD广告进行“再营销(Retargeting)”，定向投放给看过你产品但没买的人，ROI通常不错。'
    },
    'related': {
        type: 'paid',
        title: 'Related Products (Ads)',
        desc: '详情页底部的长条轮播区域。这里实际上大部分是竞品购买的 SP 广告位。是流量截流的乱战区。',
        cost: 'CPC',
        potential: '低 (捡漏)',
        tip: '在这个位置，你的主图必须比旁边的人更吸睛，价格更有优势，否则很容易成为陪跑。'
    },

    // === ORGANIC TRAFFIC ===
    'organic': {
        type: 'free',
        title: 'Organic Ranking (自然排名)',
        desc: '通过A10算法获得的免费排名。不花钱，但需要极高的历史销量、点击率和好评率来维持。是最稳定的长期利润来源。',
        cost: '免费 (时间成本)',
        potential: '稳定 (长期利润)',
        tip: '自然排名是“结果”不是“手段”。不要试图“刷”排名，而是通过PPC广告出单推高销量后，自然排名自然会上升。'
    },
    'editorial': {
        type: 'free',
        title: 'Editorial Recommendations',
        desc: '编辑推荐。来自权威媒体（如CNN, Buzzfeed）的文章摘要。占据首页黄金位置，具有极强的背书效应。',
        cost: '免费 / 公关费',
        potential: '中 (信任背书)',
        tip: '通常需要通过亚马逊联盟(Amazon Associates)的红人或媒体合作才能获得，门槛较高。'
    },
    'fbt': {
        type: 'free',
        title: 'Frequently Bought Together',
        desc: '经常一起购买。系统基于大数据自动生成的关联推荐。这是亚马逊最优质的免费关联流量。转化率极高。',
        cost: '免费',
        potential: '极高 (捆绑销售)',
        tip: '不要试图只卖单品。通过后台设置虚拟捆绑包(Virtual Bundle)人为增加两个产品同时购买的概率，强制形成FBT。'
    },
    'brandstory': {
        type: 'free',
        title: 'Brand Story (品牌故事)',
        desc: '位于A+页面上方的一个横向滑动模块。可以链接到店铺的其他产品或分类页面，是详情页中难得的免费私域导流入口。',
        cost: '免费 (需品牌备案)',
        potential: '高 (流量闭环)',
        tip: '利用Brand Story展示你的产品全家福，让客户点击跳转到你店铺里的其他产品，而不是跳出页面去买竞品。'
    },
    'compare': {
        type: 'free',
        title: 'Compare with similar items',
        desc: '系统自动生成的对比表。如果你的参数（如电池容量、配件数量）比竞品好，这里就是你的免费广告位。',
        cost: '免费',
        potential: '中 (参数对比)',
        tip: '优化Listing的参数属性（Item Specifics），确保你的优势参数（如更轻、更持久）被系统正确抓取并展示在这里。'
    }
};

const lab = {
    currentView: 'serp',
    currentFilter: 'all',

    // 1. Switch View (SERP vs PDP)
    switchView: function(viewName) {
        this.currentView = viewName;
        
        // Hide/Show Canvas Areas
        document.getElementById('lab-view-serp').classList.add('hidden');
        document.getElementById('lab-view-pdp').classList.add('hidden');
        document.getElementById(`lab-view-${viewName}`).classList.remove('hidden');

        // Update Button States
        const btnSerp = document.getElementById('lab-tab-serp');
        const btnPdp = document.getElementById('lab-tab-pdp');
        
        const activeClass = ['bg-[#FF9900]', 'text-black'];
        const inactiveClass = ['bg-[#232F3E]', 'text-gray-300', 'hover:text-white'];

        if(viewName === 'serp') {
            btnSerp.className = `px-4 py-1.5 rounded text-xs font-bold transition ${activeClass.join(' ')}`;
            btnPdp.className = `px-4 py-1.5 rounded text-xs font-bold transition ${inactiveClass.join(' ')}`;
        } else {
            btnPdp.className = `px-4 py-1.5 rounded text-xs font-bold transition ${activeClass.join(' ')}`;
            btnSerp.className = `px-4 py-1.5 rounded text-xs font-bold transition ${inactiveClass.join(' ')}`;
        }
        
        // Re-apply filter to new view
        this.filter(this.currentFilter);
    },

    // 2. Filter Logic (Paid/Free)
    filter: function(type) {
        this.currentFilter = type;
        const container = document.getElementById('lab-canvas-container');
        const items = container.querySelectorAll('[data-type]');
        
        // Update Filter Buttons
        ['all', 'paid', 'free'].forEach(k => {
            const btn = document.getElementById(`lab-filter-${k}`);
            if(k === type) {
                btn.classList.add('bg-white', 'shadow', 'text-gray-900');
                btn.classList.remove('opacity-60');
            } else {
                btn.classList.remove('bg-white', 'shadow', 'text-gray-900');
                btn.classList.add('opacity-60');
            }
        });

        // Toggle Items
        items.forEach(item => {
            const itemType = item.getAttribute('data-type');
            const hotspot = item.querySelector('.hotspot-point');
            
            if (type === 'all' || itemType === type) {
                item.style.opacity = '1';
                item.style.filter = 'none';
                if(hotspot) hotspot.style.pointerEvents = 'auto'; // Enable click
            } else {
                item.style.opacity = '0.1'; // Dim heavily
                item.style.filter = 'grayscale(100%)';
                if(hotspot) hotspot.style.pointerEvents = 'none'; // Disable click
            }
        });
    },

    // 3. X-Ray Toggle
    toggleXray: function() {
        const container = document.getElementById('lab-canvas-container');
        const toggleBtn = document.getElementById('xray-toggle');
        
        if (toggleBtn.checked) {
            container.classList.add('xray-active');
        } else {
            container.classList.remove('xray-active');
        }
    },

    // 4. Modal Logic
    openModal: function(key) {
        const data = labData[key];
        if(!data) return;

        const modal = document.getElementById('lab-modal');
        const badge = document.getElementById('modal-badge');
        
        // Populate Data
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-cost').innerText = data.cost;
        document.getElementById('modal-potential').innerText = data.potential;
        document.getElementById('modal-tip').innerText = data.tip;

        // Badge Style
        if(data.type === 'paid') {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700';
            badge.innerText = 'PAID TRAFFIC';
        } else {
            badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700';
            badge.innerText = 'ORGANIC TRAFFIC';
        }

        // Show Modal
        modal.classList.add('active');
        // Prevent background scroll
        document.body.style.overflow = 'hidden';
    },

    closeModal: function() {
        const modal = document.getElementById('lab-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// --- Diagnostics Tool Logic ---
function diagnose() {
    const imp = document.getElementById('diag-imp').value;
    const ctr = document.getElementById('diag-ctr').value;
    const cvr = document.getElementById('diag-cvr').value;
    const resBox = document.getElementById('diag-result');
    
    let msg = "";
    
    // Simple Logic
    if (imp === 'low') {
        msg = "🚨 <strong>问题：流量枯竭</strong><br>你的产品根本没被看到。<br>👉 <strong>建议：</strong>检查Listing关键词是否被收录；增加PPC广告预算；开启自动广告跑词。";
    } else if (ctr === 'low') {
        msg = "⚠️ <strong>问题：点击率低</strong><br>有曝光但没人点。<br>👉 <strong>建议：</strong>优化主图（差异化）；检查价格是否无竞争力；标题前50字符是否吸引人；检查Review星级。";
    } else if (cvr === 'low') {
        msg = "📉 <strong>问题：转化率低</strong><br>有人点但没人买。<br>👉 <strong>建议：</strong>优化五点描述和A+页面；检查是否有差评劝退；对比竞品是否有明显短板。";
    } else {
        msg = "✅ <strong>状态良好</strong><br>各项指标健康。<br>👉 <strong>建议：</strong>保持库存；尝试适当提价测试利润；开启站外引流扩大规模。";
    }

    resBox.innerHTML = msg;
    resBox.classList.remove('hidden');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Init Lab
    lab.switchView('serp');
    lab.filter('all');

    // 2. Click outside modal to close
    document.getElementById('lab-modal').addEventListener('click', (e) => {
        if (e.target.id === 'lab-modal') {
            lab.closeModal();
        }
    });

    // 3. Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lab.closeModal();
        }
    });
});
