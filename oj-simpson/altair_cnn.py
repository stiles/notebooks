"""
A CNN theme for Altair.
"""
# Color schemes and defaults
palette = dict(
    black="#c00",
    white="#ffffff",
    default="#7c4ea5",
    accent="#21594E",
    highlight="#21594E",
    democrat="#5194c3",
    republican="#c52622",
    schemes={
        "category-5": [
            "#7c4ea5",
            "#5194c3",
            "#f8c153",
            "#53a796",
            "#f18851",
        ],
        "teal-7": [
            "#C7EAE5",
            "#A6CDC7",
            "#85B0A9",
            "#64938B",
            "#42766C",
            "#21594E",
            "#003C30"
        ],
        "fireandice-6": [
            "#e68a4f",
            "#f4bb6a",
            "#f9e39c",
            "#dadfe2",
            "#a6b7c6",
            "#849eae",
        ],
        "ice-7": [
            "#edefee",
            "#dadfe2",
            "#c4ccd2",
            "#a6b7c6",
            "#849eae",
            "#607785",
            "#47525d",
        ],
        "cb-diverging-purpgrn": [
            "#762a83",
            "#af8dc3",
            "#e7d4e8",
            "#f7f7f7",
            "#d9f0d3",
            "#7fbf7b",
            "#1b7837",
        ],
        "cb-diverging-bluegreen": [
            "#8c510a",
            "#d8b365",
            "#f6e8c3",
            "#f5f5f5",
            "#c7eae5",
            "#5ab4ac",
            "#01665e",
        ]
    },
)


def theme():
    """
    A CNN theme for Altair.
    """
    # Headlines
    headlineFontSize = 18
    headlineFontWeight = "bold"
    headlineFont = "CNNSansDisplay-Bold"

    # Titles for axes and legends
    titleFont = "CNN Sans Display"
    titleFontWeight = "bold"
    titleFontSize = 13
    titleFontColor = '#262626'

    # Labels for ticks and legend entries
    labelFont = "CNN Sans Display"
    labelFontSize = 13
    labelFontWeight = "normal"
    labelFontColor = '#b1b1b1'
    titleFontColor = '#b1b1b1'

    return dict(
        config=dict(
            padding={"left": -10, "top": 10, "right": 5, "bottom": 0},
            view=dict(width=650, height=400, strokeOpacity=0),
            background=palette["white"],
            title=dict(
                anchor="start",
                font=headlineFont,
                fontColor=palette["black"],
                fontSize=headlineFontSize,
                fontWeight=headlineFontWeight,
                dy=-10,
                dx=10,
                subtitleFontSize=20,
            ),
            arc=dict(fill=palette["default"]),
            area=dict(fill=palette["default"], opacity=.6),
            line=dict(stroke=palette["default"], strokeWidth=3),
            path=dict(stroke=palette["default"]),
            rect=dict(fill=palette["default"]),
            shape=dict(stroke=palette["default"]),
            bar=dict(fill=palette["default"]),
            point=dict(stroke=palette["default"]),
            symbol=dict(fill=palette["default"], size=30),
            axis=dict(
                titleFont=titleFont,
                titleFontSize=titleFontSize,
                titleFontWeight=titleFontWeight,
                labelFont=labelFont,
                labelFontSize=labelFontSize,
                labelFontWeight=labelFontWeight,
                labelFontColor='#b1b1b1'
            ),
            axisX=dict(labelAngle=0, labelPadding=6, tickSize=3, grid=False),
            axisY=dict(
                labelBaseline="middle",
                maxExtent=45,
                minExtent=45,
                titleAlign="left",
                titleAngle=0,
                titleX=-35,
                titleY=-46,
                domainOpacity=0,
                gridWidth=0.6,
                gridColor="#ececec",
                offset=10,
                tickSize=0,
                titleColor='#1a1a1a',
                labelFontColor='#b1b1b1'
            ),
            legend=dict(
                titleFont=titleFont,
                titleFontSize=titleFontSize,
                titleFontWeight=titleFontWeight,
                symbolType="square",
                labelFont=labelFont,
                labelFontSize=labelFontSize,
                anchor='middle',
                legendX=-50
            ),
            range=dict(
                category=palette["schemes"]["category-5"],
                diverging=palette["schemes"]["cb-diverging-bluegreen"],
                heatmap=palette["schemes"]["teal-7"],
                ordinal=palette["schemes"]["category-5"],
                ramp=palette["schemes"]["teal-7"],
            ),
        )
    )