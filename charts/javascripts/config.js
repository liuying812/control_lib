var EXAMPLES = ({
	cn: [{
			id: "area-rainfall",
			title: "雨量流量关系图",
			type: "line"
		}, {
			id: "area-simple",
			title: "大数据量面积图",
			type: "line"
		}, {
			id: "area-stack",
			title: "堆叠区域图",
			type: "line"
		}, {
			id: "bar-animation-delay",
			title: "柱状图动画延迟",
			type: "bar"
		}, {
			id: "bar-brush",
			title: "柱状图框选",
			type: "bar"
		}, {
			id: "bar-gradient",
			title: "特性示例：渐变色 阴影 点击缩放",
			type: "bar"
		}, {
			id: "bar-negative",
			title: "正负条形图",
			type: "bar"
		}, {
			id: "bar-negative2",
			title: "交错正负轴标签",
			type: "bar"
		}, {
			id: "bar-stack",
			title: "堆叠柱状图",
			type: "bar"
		}, {
			id: "bar-tick-align",
			title: "坐标轴刻度与标签对齐",
			type: "bar"
		}, {
			id: "bar-waterfall",
			title: "深圳月最低生活费组成（单位:元）",
			type: "bar"
		}, {
			id: "bar-waterfall2",
			title: "阶梯瀑布图",
			type: "bar"
		}, {
			id: "bar-y-category-stack",
			title: "堆叠条形图",
			type: "bar"
		}, {
			id: "bar-y-category",
			title: "世界人口总量 - 条形图",
			type: "bar"
		}, {
			id: "bar1",
			title: "某地区蒸发量和降水量",
			type: "bar"
		}, {
			id: "boxplot-light-velocity",
			title: "Boxplot Light Velocity",
			type: "boxplot"
		}, {
			id: "boxplot-light-velocity2",
			title: "Boxplot Light Velocity2",
			type: "boxplot"
		}, {
			id: "boxplot-multi",
			title: "Multiple Categories",
			type: "boxplot"
		}, {
			id: "bubble-gradient",
			title: "气泡图",
			type: "scatter"
		}, {
			id: "candlestick-brush",
			title: "Candlestick Brush",
			type: "candlestick"
		}, {
			id: "candlestick-sh-2015",
			title: "2015 年上证指数",
			type: "candlestick"
		}, {
			id: "candlestick-sh",
			title: "上证指数",
			type: "candlestick"
		}, {
			id: "candlestick-touch",
			title: "触屏上的坐标轴指示器",
			type: "candlestick"
		}, {
			id: "confidence-band",
			title: "Confidence Band",
			type: "line"
		}, {
			id: "dynamic-data",
			title: "动态数据",
			type: "bar"
		}, {
			id: "dynamic-data2",
			title: "动态数据 + 时间坐标轴",
			type: "line"
		}, {
			id: "effectScatter-bmap",
			title: "全国主要城市空气质量 - 百度地图",
			type: "scatter"
		}, {
			id: "effectScatter-map",
			title: "全国主要城市空气质量",
			type: "scatter"
		}, {
			id: "funnel-align",
			title: "漏斗图(对比)",
			type: "funnel"
		}, {
			id: "funnel-customize",
			title: "漏斗图",
			type: "funnel"
		}, {
			id: "funnel-mutiple",
			title: "漏斗图",
			type: "funnel"
		}, {
			id: "funnel",
			title: "漏斗图",
			type: "funnel"
		}, {
			id: "gauge-car-dark",
			title: "Gauge Car Dark",
			type: "gauge"
		}, {
			id: "gauge-car",
			title: "Gauge Car",
			type: "gauge"
		}, {
			id: "gauge",
			title: "Gauge",
			type: "gauge"
		}, {
			id: "geo-lines",
			title: "模拟迁徙",
			type: "map"
		}, {
			id: "graph-circular-layout",
			title: "Les Miserables",
			type: "graph"
		}, {
			id: "graph-force",
			title: "力引导布局",
			type: "graph"
		}, {
			id: "graph-force2",
			title: "力引导布局",
			type: "graph"
		}, {
			id: "graph-grid",
			title: "笛卡尔坐标系上的 Graph",
			type: "graph"
		}, {
			id: "graph-life-expectancy",
			title: "Graph Life Expectancy",
			type: "graph"
		}, {
			id: "graph-npm",
			title: "NPM Dependencies",
			type: "graph"
		}, {
			id: "graph-simple",
			title: "Graph 简单示例",
			type: "graph"
		}, {
			id: "graph-webkit-dep",
			title: "Graph Webkit Dep",
			type: "graph"
		}, {
			id: "graph",
			title: "Les Miserables",
			type: "graph"
		}, {
			id: "grid-multiple",
			title: "雨量流量关系图",
			type: "line"
		}, {
			id: "heatmap-bmap",
			title: "热力图与百度地图扩展",
			type: "heatmap"
		}, {
			id: "heatmap-cartesian",
			title: "笛卡尔坐标系上的热力图",
			type: "heatmap"
		}, {
			id: "heatmap-large-piecewise",
			title: "热力图 - 颜色的离散映射",
			type: "heatmap"
		}, {
			id: "heatmap-large",
			title: "热力图 - 2w 数据",
			type: "heatmap"
		}, {
			id: "heatmap-map",
			title: "全国主要城市空气质量",
			type: "heatmap"
		}, {
			id: "line-aqi",
			title: "Beijing AQI",
			type: "line"
		}, {
			id: "line-draggable",
			title: "Try Dragging these Points",
			type: "line"
		}, {
			id: "line-easing",
			title: "Line Easing",
			type: "line"
		}, {
			id: "line-log",
			title: "对数轴示例",
			type: "line"
		}, {
			id: "line-marker",
			title: "未来一周气温变化",
			type: "line"
		}, {
			id: "line-pen",
			title: "Click to Add Points",
			type: "line"
		}, {
			id: "line-polar",
			title: "极坐标双数值轴",
			type: "line"
		}, {
			id: "line-polar2",
			title: "极坐标双数值轴",
			type: "line"
		}, {
			id: "line-sections",
			title: "一天用电量分布",
			type: "line"
		}, {
			id: "line-stack",
			title: "折线图堆叠",
			type: "line"
		}, {
			id: "line-step",
			title: "Step Line",
			type: "line"
		}, {
			id: "line-y-category",
			title: "Line Y Category",
			type: "line"
		}, {
			id: "multiple-x-axis",
			title: "Multiple X Axes",
			type: "line"
		}, {
			id: "line-tooltip-touch",
			title: "Tooltip and DataZoom on Mobile",
			type: "line"
		}, {
			id: "lines-airline",
			title: "65k+ 飞机航线",
			type: "map"
		}, {
			id: "lines-bmap-bus",
			title: "北京公交路线 - 百度地图",
			type: "map"
		}, {
			id: "lines-bmap-effect",
			title: "北京公交路线 - 线特效",
			type: "map"
		}, {
			id: "lines-bmap",
			title: "杭州热门步行路线 - 百度地图",
			type: "map"
		}, {
			id: "map-china-dataRange",
			title: "iphone销量",
			type: "map"
		}, {
			id: "map-china",
			title: "Map China",
			type: "map"
		}, {
			id: "map-HK",
			title: "香港18区人口密度 （2011）",
			type: "map"
		}, {
			id: "map-locate",
			title: "Map Locate",
			type: "map"
		}, {
			id: "geo-map-scatter",
			title: "map and scatter share a geo",
			type: "map"
		}, {
			id: "map-parallel-prices",
			title: "Prices and Earnings 2012",
			type: "scatter"
		}, {
			id: "map-province",
			title: "34 省切换查看",
			type: "map"
		}, {
			id: "map-usa",
			title: "USA Population Estimates (2012)",
			type: "map"
		}, {
			id: "map-world-dataRange",
			title: "World Population (2010)",
			type: "map"
		}, {
			id: "map-world",
			title: "Map World",
			type: "map"
		}, {
			id: "mix-line-bar",
			title: "折柱混合",
			type: "bar"
		}, {
			id: "mix-timeline-finance",
			title: "2002全国宏观经济指标",
			type: "bar"
		}, {
			id: "mix-zoom-on-value",
			title: "Mix Zoom On Value",
			type: "bar"
		}, {
			id: "multiple-y-axis",
			title: "多 Y 轴示例",
			type: "bar"
		}, {
			id: "parallel-aqi",
			title: "Parallel Aqi",
			type: "parallel"
		}, {
			id: "parallel-nutrients",
			title: "Parallel Nutrients",
			type: "parallel"
		}, {
			id: "map-parallel-prices",
			title: "Prices and Earnings 2012",
			type: "parallel"
		}, {
			id: "pie-custom",
			title: "Customized Pie",
			type: "pie"
		}, {
			id: "pie-doughnut",
			title: "环形图",
			type: "pie"
		}, {
			id: "pie-nest",
			title: "嵌套环形图",
			type: "pie"
		}, {
			id: "pie-pattern",
			title: "饼图纹理",
			type: "pie"
		}, {
			id: "pie-roseType",
			title: "南丁格尔玫瑰图",
			type: "pie"
		}, {
			id: "pie-simple",
			title: "某站点用户访问来源",
			type: "pie"
		}, {
			id: "radar-aqi",
			title: "AQI - 雷达图",
			type: "radar"
		}, {
			id: "radar-custom",
			title: "自定义雷达图",
			type: "radar"
		}, {
			id: "radar-multiple",
			title: "多雷达图",
			type: "radar"
		}, {
			id: "radar",
			title: "基础雷达图",
			type: "radar"
		}, {
			id: "radar2",
			title: "浏览器占比变化",
			type: "radar"
		}, {
			id: "sankey-energy",
			title: "Sankey Diagram",
			type: "sankey"
		}, {
			id: "sankey-product",
			title: "Sankey Diagram",
			type: "sankey"
		}, {
			id: "scatter-anscombe-quartet",
			title: "Anscombe&#39;s quartet",
			type: "scatter"
		}, {
			id: "scatter-aqi-color",
			title: "Scatter Aqi Color",
			type: "scatter"
		}, {
			id: "scatter-large",
			title: "大规模散点图",
			type: "scatter"
		}, {
			id: "scatter-life-expectancy-timeline",
			title: "各国人均寿命与GDP关系演变",
			type: "scatter"
		}, {
			id: "scatter-map-brush",
			title: "Scatter Map Brush",
			type: "scatter"
		}, {
			id: "scatter-map",
			title: "全国主要城市空气质量",
			type: "scatter"
		}, {
			id: "scatter-matrix",
			title: "Scatter Matrix",
			type: "parallel"
		}, {
			id: "scatter-nutrients",
			title: "Scatter Nutrients",
			type: "scatter"
		}, {
			id: "scatter-painter-choice",
			title: "Master Painter Color Choices Throughout History",
			type: "scatter"
		}, {
			id: "scatter-polar-punchCard",
			title: "Punch Card of Github",
			type: "scatter"
		}, {
			id: "scatter-punchCard",
			title: "Punch Card of Github",
			type: "scatter"
		}, {
			id: "scatter-single-axis",
			title: "单轴散点图",
			type: "scatter"
		}, {
			id: "scatter-weibo",
			title: "微博签到数据点亮中国",
			type: "scatter"
		}, {
			id: "scatter-weight",
			title: "男性女性身高体重分布",
			type: "scatter"
		}, {
			id: "scatter-world-population",
			title: "World Population (2011)",
			type: "scatter"
		}, {
			id: "scatter-nutrients-matrix",
			title: "Scatter Nutrients Matrix",
			type: "scatter"
		}, {
			id: "treemap-disk",
			title: "Disk Usage",
			type: "treemap"
		}, {
			id: "treemap-drill-down",
			title: "ECharts 配置项查询分布",
			type: "treemap"
		}, {
			id: "treemap-obama",
			title: "How $3.7 Trillion is Spent",
			type: "treemap"
		}, {
			id: "treemap-visual",
			title: "Gradient Mapping",
			type: "treemap"
		}, {
			id: "watermark",
			title: "水印 - ECharts 下载统计",
			type: "bar"
		}, {
			id: "pictorialBar-hill",
			title: "圣诞愿望清单和山峰高度",
			type: "pictorialBar"
		}, {
			id: "pictorialBar-velocity",
			title: "驯鹿的速度",
			type: "pictorialBar"
		}, {
			id: "pictorialBar-vehicle",
			title: "交通工具",
			type: "pictorialBar"
		}, {
			id: "pictorialBar-spirit",
			title: "精灵",
			type: "pictorialBar"
		}, {
			id: "pictorialBar-body-fill",
			title: "人体含水量",
			type: "pictorialBar"
		}, {
			id: "pictorialBar-dotted",
			title: "虚线柱状图效果",
			type: "pictorialBar"
		}, {
			id: "pictorialBar-forest",
			title: "森林的增长",
			type: "pictorialBar"
		}, {
			id: "themeRiver-basic",
			title: "主题河流图",
			type: "themeRiver"
		}, {
			id: "themeRiver-lastfm",
			title: "ThemeRiver Lastfm",
			type: "themeRiver"
		}, {
			id: "calendar-graph",
			title: "Calendar Graph",
			type: "graph"
		}, {
			id: "calendar-pie",
			title: "Calendar Pie",
			type: "calendar"
		}, {
			id: "calendar-effectscatter",
			title: "Calendar Effectscatter",
			type: "scatter"
		}, {
			id: "calendar-vertical",
			title: "Calendar Heatmap Vertical",
			type: "heatmap"
		}, {
			id: "calendar-horizontal",
			title: "Calendar Heatmap Horizontal",
			type: "heatmap"
		}, {
			id: "calendar-effectscatter",
			title: "Calendar Effectscatter",
			type: "calendar"
		}, {
			id: "calendar-vertical",
			title: "Calendar Heatmap Vertical",
			type: "calendar"
		}, {
			id: "calendar-horizontal",
			title: "Calendar Heatmap Horizontal",
			type: "calendar"
		}, {
			id: "calendar-charts",
			title: "Calendar Charts",
			type: "calendar"
		}, {
			id: "calendar-lunar",
			title: "Calendar Lunar",
			type: "calendar"
		}
	],
	en: [{
			id: 'area-rainfall',
			title: 'Rainfall and Water Flow',
			type: 'line'
		}, {
			id: 'area-simple',
			title: 'Area Chart',
			type: 'line'
		}, {
			id: 'area-stack',
			title: 'Stacked Area',
			type: 'line'
		}, {
			id: 'bar-animation-delay',
			title: 'Animation Delay on Bar Chart',
			type: 'bar'
		}, {
			id: 'bar-brush',
			title: 'Brush on Bar Chart',
			type: 'bar'
		}, {
			id: 'bar-gradient',
			title: 'Gradient, Shadow, Click Zoom',
			type: 'bar'
		}, {
			id: 'bar-negative',
			title: 'Negative Bar Chart',
			type: 'bar'
		}, {
			id: 'bar-negative2',
			title: 'Negative and Positive',
			type: 'bar'
		}, {
			id: 'bar-stack',
			title: 'Stacked Bar',
			type: 'bar'
		}, {
			id: 'bar-tick-align',
			title: 'Align between Ticks and Labels',
			type: 'bar'
		}, {
			id: 'bar-waterfall',
			title: 'Minimum Cost of Living in Shenzhen (RMB)',
			type: 'bar'
		}, {
			id: 'bar-waterfall2',
			title: 'Waterfall Chart',
			type: 'bar'
		}, {
			id: 'bar-y-category-stack',
			title: 'Stacked Bar Chart',
			type: 'bar'
		}, {
			id: 'bar-y-category',
			title: 'World Totle Population',
			type: 'bar'
		}, {
			id: 'bar1',
			title: 'Rainfall and Evaporation',
			type: 'bar'
		}, {
			id: 'boxplot-light-velocity',
			title: 'Boxplot Light Velocity',
			type: 'boxplot'
		}, {
			id: 'boxplot-light-velocity2',
			title: 'Boxplot Light Velocity2',
			type: 'boxplot'
		}, {
			id: 'boxplot-multi',
			title: 'Multiple Categories',
			type: 'boxplot'
		}, {
			id: 'bubble-gradient',
			title: 'Bubble Chart',
			type: 'scatter'
		}, {
			id: 'candlestick-brush',
			title: 'Candlestick Brush',
			type: 'candlestick'
		}, {
			id: 'candlestick-sh-2015',
			title: 'ShangHai Index, 2015',
			type: 'candlestick'
		}, {
			id: 'candlestick-sh',
			title: 'ShangHai Index',
			type: 'candlestick'
		}, {
			id: 'candlestick-touch',
			title: 'Axis Pointer Link and Touch',
			type: 'candlestick'
		}, {
			id: 'confidence-band',
			title: 'Confidence Band',
			type: 'line'
		}, {
			id: 'dynamic-data',
			title: 'Dynamic Data',
			type: 'bar'
		}, {
			id: 'dynamic-data2',
			title: 'Dynamic Data + Time Axis',
			type: 'line'
		}, {
			id: 'effectScatter-bmap',
			title: 'Air Quality - Baidu Map',
			type: 'scatter'
		}, {
			id: 'effectScatter-map',
			title: 'Air Quality',
			type: 'scatter'
		}, {
			id: 'funnel-align',
			title: 'Funnel (align)',
			type: 'funnel'
		}, {
			id: 'funnel-customize',
			title: 'Customized Funnel',
			type: 'funnel'
		}, {
			id: 'funnel-mutiple',
			title: 'Multiple Funnels',
			type: 'funnel'
		}, {
			id: 'funnel',
			title: 'Funnel Chart',
			type: 'funnel'
		}, {
			id: 'gauge-car-dark',
			title: 'Gauge Car Dark',
			type: 'gauge'
		}, {
			id: 'gauge-car',
			title: 'Gauge Car',
			type: 'gauge'
		}, {
			id: 'gauge',
			title: 'Gauge',
			type: 'gauge'
		}, {
			id: 'geo-lines',
			title: 'Migration',
			type: 'map'
		}, {
			id: 'graph-circular-layout',
			title: 'Les Miserables',
			type: 'graph'
		}, {
			id: 'graph-force',
			title: 'Force Layout',
			type: 'graph'
		}, {
			id: 'graph-force2',
			title: 'Force Layout',
			type: 'graph'
		}, {
			id: 'graph-grid',
			title: 'Graph on Cartesian',
			type: 'graph'
		}, {
			id: 'graph-life-expectancy',
			title: 'Graph Life Expectancy',
			type: 'graph'
		}, {
			id: 'graph-npm',
			title: 'NPM Dependencies',
			type: 'graph'
		}, {
			id: 'graph-simple',
			title: 'Simple Graph',
			type: 'graph'
		}, {
			id: 'graph-webkit-dep',
			title: 'Graph Webkit Dep',
			type: 'graph'
		}, {
			id: 'graph',
			title: 'Les Miserables',
			type: 'graph'
		}, {
			id: 'grid-multiple',
			title: 'Rainfall and Water Flow',
			type: 'line'
		}, {
			id: 'heatmap-bmap',
			title: 'Heatmap on Baidu Map Extension',
			type: 'heatmap'
		}, {
			id: 'heatmap-cartesian',
			title: 'Heatmap on Cartesian',
			type: 'heatmap'
		}, {
			id: 'heatmap-large-piecewise',
			title: 'Heatmap - Discrete Mapping of Color',
			type: 'heatmap'
		}, {
			id: 'heatmap-large',
			title: 'Heatmap - 2w data',
			type: 'heatmap'
		}, {
			id: 'heatmap-map',
			title: 'Air Qulity',
			type: 'heatmap'
		}, {
			id: 'line-aqi',
			title: 'Beijing AQI',
			type: 'line'
		}, {
			id: 'line-draggable',
			title: 'Try Dragging these Points',
			type: 'line'
		}, {
			id: 'line-easing',
			title: 'Line Easing',
			type: 'line'
		}, {
			id: 'line-log',
			title: 'Log Axis',
			type: 'line'
		}, {
			id: 'line-marker',
			title: 'Temperature Change in the coming week',
			type: 'line'
		}, {
			id: 'line-pen',
			title: 'Click to Add Points',
			type: 'line'
		}, {
			id: 'line-polar',
			title: 'Two Value-Axes in Polar',
			type: 'line'
		}, {
			id: 'line-polar2',
			title: 'Two Value-Axes in Polar',
			type: 'line'
		}, {
			id: 'line-sections',
			title: 'Distribution of Electricity',
			type: 'line'
		}, {
			id: 'line-stack',
			title: 'Stacked Line Chart',
			type: 'line'
		}, {
			id: 'line-step',
			title: 'Step Line',
			type: 'line'
		}, {
			id: 'line-y-category',
			title: 'Line Y Category',
			type: 'line'
		}, {
			id: 'multiple-x-axis',
			title: 'Multiple X Axes',
			type: 'line'
		}, {
			id: 'line-tooltip-touch',
			title: 'Tooltip and DataZoom on Mobile',
			type: 'line'
		}, {
			id: 'lines-airline',
			title: '65k+ Airline',
			type: 'map'
		}, {
			id: 'lines-bmap-bus',
			title: 'Bus Lines of Beijing - Baidu Map',
			type: 'map'
		}, {
			id: 'lines-bmap-effect',
			title: 'Bus Lines of Beijing - Line Effect',
			type: 'map'
		}, {
			id: 'lines-bmap',
			title: 'A Hiking Trail in Hangzhou - Baidu Map',
			type: 'map'
		}, {
			id: 'map-china-dataRange',
			title: 'Sales of iphone',
			type: 'map'
		}, {
			id: 'map-china',
			title: 'Map China',
			type: 'map'
		}, {
			id: 'map-HK',
			title: 'Population Density of HongKong (2011)',
			type: 'map'
		}, {
			id: 'map-locate',
			title: 'Map Locate',
			type: 'map'
		}, {
			id: 'geo-map-scatter',
			title: 'map and scatter share a geo',
			type: 'map'
		}, {
			id: 'map-parallel-prices',
			title: 'Prices and Earnings 2012',
			type: 'scatter'
		}, {
			id: 'map-province',
			title: 'Switch among 34 Provinces',
			type: 'map'
		}, {
			id: 'map-usa',
			title: 'USA Population Estimates (2012)',
			type: 'map'
		}, {
			id: 'map-world-dataRange',
			title: 'World Population (2010)',
			type: 'map'
		}, {
			id: 'map-world',
			title: 'Map World',
			type: 'map'
		}, {
			id: 'mix-line-bar',
			title: 'Mixed Line and Bar',
			type: 'bar'
		}, {
			id: 'mix-timeline-finance',
			title: 'Finance Indices 2002',
			type: 'bar'
		}, {
			id: 'mix-zoom-on-value',
			title: 'Mix Zoom On Value',
			type: 'bar'
		}, {
			id: 'multiple-y-axis',
			title: 'Multiple Y Axes',
			type: 'bar'
		}, {
			id: 'parallel-aqi',
			title: 'Parallel Aqi',
			type: 'parallel'
		}, {
			id: 'parallel-nutrients',
			title: 'Parallel Nutrients',
			type: 'parallel'
		}, {
			id: 'map-parallel-prices',
			title: 'Prices and Earnings 2012',
			type: 'parallel'
		}, {
			id: 'pie-custom',
			title: 'Customized Pie',
			type: 'pie'
		}, {
			id: 'pie-doughnut',
			title: 'Doughnut Chart',
			type: 'pie'
		}, {
			id: 'pie-nest',
			title: 'Nested Pies',
			type: 'pie'
		}, {
			id: 'pie-pattern',
			title: 'Texture on Pie Chart',
			type: 'pie'
		}, {
			id: 'pie-roseType',
			title: 'Nightingale\'s Rose Diagram',
			type: 'pie'
		}, {
			id: 'pie-simple',
			title: 'Referer of a website',
			type: 'pie'
		}, {
			id: 'radar-aqi',
			title: 'AQI - Radar Chart',
			type: 'radar'
		}, {
			id: 'radar-custom',
			title: 'Customized Radar Chart',
			type: 'radar'
		}, {
			id: 'radar-multiple',
			title: 'Multiple Radar',
			type: 'radar'
		}, {
			id: 'radar',
			title: 'Basic Radar Chart',
			type: 'radar'
		}, {
			id: 'radar2',
			title: 'Propotion of Browsers',
			type: 'radar'
		}, {
			id: 'sankey-energy',
			title: 'Sankey Diagram',
			type: 'sankey'
		}, {
			id: 'sankey-product',
			title: 'Sankey Diagram',
			type: 'sankey'
		}, {
			id: 'scatter-anscombe-quartet',
			title: 'Anscombe&#39;s quartet',
			type: 'scatter'
		}, {
			id: 'scatter-aqi-color',
			title: 'Scatter Aqi Color',
			type: 'scatter'
		}, {
			id: 'scatter-large',
			title: 'Large Scatter',
			type: 'scatter'
		}, {
			id: 'scatter-life-expectancy-timeline',
			title: 'Life Expectancy and GDP',
			type: 'scatter'
		}, {
			id: 'scatter-map-brush',
			title: 'Scatter Map Brush',
			type: 'scatter'
		}, {
			id: 'scatter-map',
			title: 'Air Quality',
			type: 'scatter'
		}, {
			id: 'scatter-matrix',
			title: 'Scatter Matrix',
			type: 'parallel'
		}, {
			id: 'scatter-nutrients',
			title: 'Scatter Nutrients',
			type: 'scatter'
		}, {
			id: 'scatter-painter-choice',
			title: 'Master Painter Color Choices Throughout History',
			type: 'scatter'
		}, {
			id: 'scatter-polar-punchCard',
			title: 'Punch Card of Github',
			type: 'scatter'
		}, {
			id: 'scatter-punchCard',
			title: 'Punch Card of Github',
			type: 'scatter'
		}, {
			id: 'scatter-single-axis',
			title: 'Scatter on Single Axis',
			type: 'scatter'
		}, {
			id: 'scatter-weibo',
			title: 'Sign in of weibo',
			type: 'scatter'
		}, {
			id: 'scatter-weight',
			title: 'Distribution of Height and Weight',
			type: 'scatter'
		}, {
			id: 'scatter-world-population',
			title: 'World Population (2011)',
			type: 'scatter'
		}, {
			id: 'scatter-nutrients-matrix',
			title: 'Scatter Nutrients Matrix',
			type: 'scatter'
		}, {
			id: 'treemap-disk',
			title: 'Disk Usage',
			type: 'treemap'
		}, {
			id: 'treemap-drill-down',
			title: 'ECharts Option Query',
			type: 'treemap'
		}, {
			id: 'treemap-obama',
			title: 'How $3.7 Trillion is Spent',
			type: 'treemap'
		}, {
			id: 'treemap-visual',
			title: 'Gradient Mapping',
			type: 'treemap'
		}, {
			id: 'watermark',
			title: 'Watermark - ECharts Download',
			type: 'bar'
		}, {
			id: 'pictorialBar-hill',
			title: 'Wish List and Mountain Height',
			type: 'pictorialBar'
		}, {
			id: 'pictorialBar-velocity',
			title: 'Velocity of Christmas Reindeers',
			type: 'pictorialBar'
		}, {
			id: 'pictorialBar-vehicle',
			title: 'Vehicles',
			type: 'pictorialBar'
		}, {
			id: 'pictorialBar-spirit',
			title: 'Spirits',
			type: 'pictorialBar'
		}, {
			id: 'pictorialBar-body-fill',
			title: 'Water Content',
			type: 'pictorialBar'
		}, {
			id: 'pictorialBar-dotted',
			title: 'Dotted bar',
			type: 'pictorialBar'
		}, {
			id: 'pictorialBar-forest',
			title: 'Expansion of forest',
			type: 'pictorialBar'
		}, {
			id: 'themeRiver-basic',
			title: 'ThemeRiver',
			type: 'themeRiver'
		}, {
			id: 'themeRiver-lastfm',
			title: 'ThemeRiver Lastfm',
			type: 'themeRiver'
		}, {
			id: 'calendar-graph',
			title: 'Calendar Graph',
			type: 'graph'
		}, {
			id: 'calendar-pie',
			title: 'Calendar Pie',
			type: 'calendar'
		}, {
			id: 'calendar-effectscatter',
			title: 'Calendar Effectscatter',
			type: 'scatter'
		}, {
			id: 'calendar-vertical',
			title: 'Calendar Heatmap Vertical',
			type: 'heatmap'
		}, {
			id: 'calendar-horizontal',
			title: 'Calendar Heatmap Horizontal',
			type: 'heatmap'
		}, {
			id: 'calendar-effectscatter',
			title: 'Calendar Effectscatter',
			type: 'calendar'
		}, {
			id: 'calendar-vertical',
			title: 'Calendar Heatmap Vertical',
			type: 'calendar'
		}, {
			id: 'calendar-horizontal',
			title: 'Calendar Heatmap Horizontal',
			type: 'calendar'
		}, {
			id: 'calendar-charts',
			title: 'Calendar Charts',
			type: 'calendar'
		}, {
			id: 'calendar-lunar',
			title: 'Calendar Lunar',
			type: 'calendar'
		}
	]
})[window.EC_DEMO_LANG];

var CHART_TYPES = ({
	cn: {
		scatter: "散点图",
		line: "折线图",
		bar: "柱状图",
		map: "地图",
		pie: "饼图",
		radar: "雷达图",
		candlestick: "k线图",
		boxplot: "箱线图",
		heatmap: "热力图",
		graph: "关系图",
		treemap: "矩形树图",
		parallel: "平行坐标",
		sankey: "桑基图",
		funnel: "漏斗图",
		gauge: "仪表盘",
		pictorialBar: "象形柱图",
		themeRiver: "主题河流图",
		calendar: "日历图"
	},
	en: {
		scatter: 'Scatter',
		line: 'Line',
		bar: 'Bar',
		map: 'Map',
		pie: 'Pie',
		radar: 'Radar',
		candlestick: 'Candlestick',
		boxplot: 'Boxplot',
		heatmap: 'Heatmap',
		graph: 'Graph',
		treemap: 'Treemap',
		parallel: 'Parallel',
		sankey: 'Sankey',
		funnel: 'Funnel',
		gauge: 'Gauge',
		pictorialBar: 'PictorialBar',
		themeRiver: 'ThemeRiver',
		calendar: 'Calendar'
	}
})[window.EC_DEMO_LANG];
