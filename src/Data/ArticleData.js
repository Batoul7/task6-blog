import arImg1 from "/src/assets/images/ar5.jpg";
import arImg2 from "/src/assets/images/ar6.jpg";
import arImg3 from "/src/assets/images/ar7.jpg";
import arImg4 from "/src/assets/images/ar8.jpg";
import arImg5 from "/src/assets/images/ar9.jpg";
import arImg6 from "/src/assets/images/ar10.jpg";
import arImg7 from "/src/assets/images/ar1.jpg";
import arImg8 from "/src/assets/images/ar2.jpg";
import arImg9 from "/src/assets/images/ar3.jpg";
import arImg10 from "/src/assets/images/ar4.jpg";

import secImg1 from "/src/assets/images/sections/sec1.jpg"
import secImg2 from "/src/assets/images/sections/sec2.jpg"
import secImg3 from "/src/assets/images/sections/sec3.jpg"
import secImg4 from "/src/assets/images/sections/sec4.jpg"
import secImg5 from "/src/assets/images/sections/sec5.jpg"
import secImg6 from "/src/assets/images/sections/sec6.jpg"
import secImg7 from "/src/assets/images/sections/sec7.jpg"
import secImg8 from "/src/assets/images/sections/sec8.jpg"
import secImg9 from "/src/assets/images/sections/sec9.jpg"


export const articles = [
    {
      id: 1,
      image: arImg1,
      title: "Bill Walsh leadership lessons",
      date: "Alec Whitten • 1 Jan 2023",
      desc:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      category:  ["Leadership" , "Management"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image:secImg1 ,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 2,
      image: arImg2,
      title: "PM mental models",
      date: "Demi WIlkinson • 1 Jan 2023",
      desc:"Mental models are simple expressions of complex processes or relationships.",
      category: ["Product", "Research", "Frameworks"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image:secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image:secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 3,
      image: arImg3,
      title: "What is Wireframing?",
      date: "Candice Wu • 1 Jan 2023",
      desc:"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      category: ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 4,
      image:arImg4,
      title: "How collaboration makes us better designers",
      date: "Natali Craig • 1 Jan 2023",
      desc:"Collaboration can make our teams stronger, and our individual designs better.",
      category:  ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 5,
      image: arImg5,
      title: "Our top 10 Javascript frameworks to use",
      date: "Drew Cano • 1 Jan 2023",
      desc:"JavaScript frameworks make development easy with extensive features and functionalities.",
      category: ["Software Development", "Tools", "SaaS"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image:secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 6,
      image: arImg6,
      title: "Podcast: Creating a better CX Community",
      date: "Orlando Diggs • 1 Jan 2023",
      desc:"Starting a community doesn’t need to be complicated, but how do you get started?",
      category: ["Podcasts", "Customer Success"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image:secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image:secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 7,
      image: arImg7,
      title: "UX review presentations",
      date: "Olivia Rhye • 1 Jan 2023",
      desc:"How do you create compelling presentations that wow your colleagues and impress your managers?",
      category:  ["Design", "Research", "Presentation"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image:secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 8,
      image: arImg8,
      title: "Migrating to Linear 101",
      date: "Phoenix Baker • 1 Jan 2023",
      desc:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
      category:  ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image:secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 9,
      image: arImg9,
      title: "Building your API Stack",
      date: "Lana Steiner • 1 Jan 2023",
      desc:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      category:  ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image:secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image:secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 10,
      image: arImg10,
      title: "Grid system for better Design User Interface",
      date: "Olivia Rhye • 1 Jan 2023",
      desc:"A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      category: ["Design","Interface"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 11,
      image: arImg1,
      title: "Bill Walsh leadership lessons",
      date: "Alec Whitten • 1 Jan 2023",
      desc:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      category:  ["Leadership" , "Management"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image:secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 12,
      image: arImg2,
      title: "PM mental models",
      date: "Demi WIlkinson • 1 Jan 2023",
      desc:"Mental models are simple expressions of complex processes or relationships.",
      category: ["Product", "Research", "Frameworks"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image:secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 13,
      image: arImg3,
      title: "What is Wireframing?",
      date: "Candice Wu • 1 Jan 2023",
      desc:"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      category: ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image:secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image:secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 14,
      image: arImg4,
      title: "How collaboration makes us better designers",
      date: "Natali Craig • 1 Jan 2023",
      desc:"Collaboration can make our teams stronger, and our individual designs better.",
      category:  ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image:secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 15,
      image: arImg5,
      title: "Our top 10 Javascript frameworks to use",
      date: "Drew Cano • 1 Jan 2023",
      desc:"JavaScript frameworks make development easy with extensive features and functionalities.",
      category: ["Software Development", "Tools", "SaaS"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image:secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image:secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 16,
      image: arImg6,
      title: "Podcast: Creating a better CX Community",
      date: "Orlando Diggs • 1 Jan 2023",
      desc:"Starting a community doesn’t need to be complicated, but how do you get started?",
      category: ["Podcasts", "Customer Success"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image:secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 17,
      image: arImg7,
      title: "UX review presentations",
      date: "Olivia Rhye • 1 Jan 2023",
      desc:"How do you create compelling presentations that wow your colleagues and impress your managers?",
      category:  ["Design", "Research", "Presentation"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image:secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 18,
      image:arImg8,
      title: "Migrating to Linear 101",
      date: "Phoenix Baker • 1 Jan 2023",
      desc:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
      category:  ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image:secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 19,
      image: arImg9,
      title: "Building your API Stack",
      date: "Lana Steiner • 1 Jan 2023",
      desc:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      category:  ["Design", "Research"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image: secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
    {
      id: 20,
      image: arImg10,
      title: "Grid system for better Design User Interface",
      date: "Olivia Rhye • 1 Jan 2023",
      desc:"A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      category: ["Design","Interface"],
      sections: [
        {
          info:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go. Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
          image: secImg1,
          descImg: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
         content: 'Breaking Down the Grid. There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins. Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
        },
        {
          image: secImg2,
          descImg: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins',
          content: 'Examples of Grids in Use Example 1: Hierarchical Grid Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
        },
        {
          image:secImg3,
          descImg: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 2: Column Grid . Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
        },
        {
          image: secImg4,
          descImg: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Example 3: Modular Grid Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
        },
        {
          image: secImg5,
          descImg: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content:'Example 4: Breaking the Grid Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
        },
        {
          image: secImg6,
          descImg: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
          content: 'Benefits of the Grid. Using a grid benefits both end users and the designers alike Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
        },
        {
          image: secImg7,
          descImg: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
          content:'Choosing and Setting Up Your Grid Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
        },
        {
          image: secImg8,
          descImg: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
          content: 'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
        },
        {
          image: secImg9,
          descImg: 'Content or elements should be placed within and across columns, not gutters.',
          h: ['Conclusion'],
          content:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
        },
      ],
    },
  ]