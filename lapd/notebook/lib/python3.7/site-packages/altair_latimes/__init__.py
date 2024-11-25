"""
A Los Angeles Times theme for Altair.
"""
# Color schemes and defaults
palette = dict(
    black='#000000',
    white='#ffffff',
    default='#82c6df',
    accent='#006d8f',
    highlight='#ec8431',
    democrat='#5789b8',
    republican='#d94f54',
    schemes={
      'category-6': [
        '#3580b1',
        '#ec8431',
        '#ab7fb4',
        '#c89d29',
        '#adc839',
        '#829eb1',
      ],
      'fire-7': [
        '#fbf2c7',
        '#f9e39c',
        '#f8d36e',
        '#f4bb6a',
        '#e68a4f',
        '#d15a40',
        '#ab4232',
      ],
      'fireandice-6': [
        '#e68a4f',
        '#f4bb6a',
        '#f9e39c',
        '#dadfe2',
        '#a6b7c6',
        '#849eae',
      ],
      'ice-7': [
        '#edefee',
        '#dadfe2',
        '#c4ccd2',
        '#a6b7c6',
        '#849eae',
        '#607785',
        '#47525d',
      ],
    }
)


def theme():
    """
    A Los Angeles Times theme for Altair.
    """
    # Headline stuff
    headlineFontSize = 22
    headlineFontWeight = "normal"
    headlineFont = 'Benton Gothic Bold, sans'

    # Titles for axes and legends and such
    titleFont = 'Benton Gothic Bold, sans'
    titleFontWeight = 'normal'
    titleFontSize = 13

    # Labels for ticks and legend entries and such
    labelFont = 'Benton Gothic, sans'
    labelFontSize = 11.5
    labelFontWeight = 'normal'

    return dict(
        config=dict(
            view=dict(
                width=800,
                height=450
            ),
            background=palette['white'],
            title=dict(
                anchor='start',
                font=headlineFont,
                fontColor=palette['black'],
                fontSize=headlineFontSize,
                fontWeight=headlineFontWeight
            ),
            arc=dict(fill=palette['default']),
            area=dict(fill=palette['default']),
            line=dict(stroke=palette['default'], strokeWidth=3),
            path=dict(stroke=palette['default']),
            rect=dict(fill=palette['default']),
            shape=dict(stroke=palette['default']),
            bar=dict(fill=palette['default']),
            point=dict(stroke=palette['default']),
            symbol=dict(fill=palette['default'], size=30),
            axis=dict(
                titleFont=titleFont,
                titleFontSize=titleFontSize,
                titleFontWeight=titleFontWeight,
                labelFont=labelFont,
                labelFontSize=labelFontSize,
                labelFontWeight=labelFontWeight
            ),
            axisX=dict(
                labelAngle=0,
                labelPadding=4,
                tickSize=3
            ),
            axisY=dict(
                labelBaseline='middle',
                maxExtent=45,
                minExtent=45,
                tickSize=2,
                titleAlign='left',
                titleAngle=0,
                titleX=-45,
                titleY=-11
            ),
            legend=dict(
                titleFont=titleFont,
                titleFontSize=titleFontSize,
                titleFontWeight=titleFontWeight,
                symbolType='square',
                labelFont=labelFont,
                labelFontSize=labelFontSize
            ),
            range=dict(
                category=palette['schemes']['category-6'],
                diverging=palette['schemes']['fireandice-6'],
                heatmap=palette['schemes']['fire-7'],
                ordinal=palette['schemes']['fire-7'],
                ramp=palette['schemes']['fire-7']
            )
        )
    )
