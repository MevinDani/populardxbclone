const partsData = [

    // engine & clutch parts
    {
        name: "Engine Gaskets",
        category: "Engine & Clutch Parts",
        image: require('../images/img16.jpg'),
    },
    {
        name: "Oil Pumps",
        category: "Engine & Clutch Parts",
        image: require('../images/img27.jpg')
    },
    {
        name: "Cylinder Head",
        category: "Engine & Clutch Parts",
        image: require('../images/img38.jpg')
    },
    {
        name: "Crank Shaft",
        category: "Engine & Clutch Parts",
        image: require('../images/img49.jpg')
    },
    {
        name: "Piston Rings",
        category: "Engine & Clutch Parts",
        image: require('../images/img65.jpg')
    },
    {
        name: "Piston & Liner",
        category: "Engine & Clutch Parts",
        image: require('../images/img17.jpg')
    },
    {
        name: "Rocker Arm",
        category: "Engine & Clutch Parts",
        image: require('../images/img20.jpg')
    },
    {
        name: "Valve Lifters",
        category: "Engine & Clutch Parts",
        image: require('../images/img21.jpg')
    },
    {
        name: "Cam Shaft",
        category: "Engine & Clutch Parts",
        image: require('../images/img60.jpg')
    },
    {
        name: "connecting rod",
        category: "Engine & Clutch Parts",
        image: require('../images/img62.jpg')
    },
    {
        name: "engine valves",
        category: "Engine & Clutch Parts",
        image: require('../images/img63.jpg')
    },
    {
        name: "glow plugs",
        category: "Engine & Clutch Parts",
        image: require('../images/img64.jpg')
    },
    {
        name: "valve seals",
        category: "Engine & Clutch Parts",
        image: require('../images/img22.jpg')
    },
    {
        name: "clutch cover",
        category: "Engine & Clutch Parts",
        image: require('../images/img23.jpg')
    },
    {
        name: "clutch kits",
        category: "Engine & Clutch Parts",
        image: require('../images/img24.jpg')
    },
    {
        name: "clutch plate",
        category: "Engine & Clutch Parts",
        image: require('../images/img25.jpg')
    },


    // Steering, Brake & Elec. Parts
    {
        name: "steering rack",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img26.jpg')
    },
    {
        name: "vane pump",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img28.jpg')
    },
    {
        name: "spindle assy",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img29.jpg')
    },
    {
        name: "drive shaft",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img30.jpg')
    },
    {
        name: "brake adjuster kit",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img35.jpg')
    },
    {
        name: "brake pad",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img36.jpg')
    },
    {
        name: "brake rotors/drums",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img37.jpg')
    },
    {
        name: "delco wire",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img39.jpg')
    },
    {
        name: "free wheel hubs",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img31.jpg')
    },
    {
        name: "brake shoe",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img32.jpg')
    },
    {
        name: "brake boosters",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img33.jpg')
    },
    {
        name: "brake caliper",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img34.jpg')
    },
    {
        name: "hydraulic parts",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img40.jpg')
    },
    {
        name: "alternator",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img41.jpg')
    },
    {
        name: "starter",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img42.jpg')
    },
    {
        name: "vaccum pump",
        category: "Steering, Brake & Elec. Parts",
        image: require('../images/img43.jpg')
    },


    // Elec. and Suspenison Parts
    {
        name: "ignition coil",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img44.jpg')
    },
    {
        name: "fuel pump",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img45.jpg')
    },
    {
        name: "ball joint",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img46.jpg')
    },
    {
        name: "control arms",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img47.jpg')
    },
    {
        name: "rack end",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img53.jpg')
    },
    {
        name: "stabilizer link",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img54.jpg')
    },
    {
        name: "tie rod end",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img55.jpg')
    },
    {
        name: "universal joints",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img56.jpg')
    },
    {
        name: "cross rods",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img48.jpg')
    },
    {
        name: "idler arm",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img50.jpg')
    },
    {
        name: "knuckle arm",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img51.jpg')
    },
    {
        name: "pitman arm",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img52.jpg')
    },
    {
        name: "rubber parts",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img57.jpg')
    },
    {
        name: "rubber boots",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img58.jpg')
    },
    {
        name: "belt tensioners",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img59.jpg')
    },
    {
        name: "fan coupling",
        category: "Elec. and Suspenison Parts",
        image: require('../images/img61.jpg')
    },



    // Other Parts
    {
        name: "timing kits",
        category: "Other Parts",
        image: require('../images/img68.jpg')
    },
    {
        name: "fan leaf",
        category: "Other Parts",
        image: require('../images/img69.jpg')
    },
    {
        name: "feed pump",
        category: "Other Parts",
        image: require('../images/img80.jpg')
    },
    {
        name: "filter case",
        category: "Other Parts",
        image: require('../images/img84.jpg')
    },
    {
        name: "synchronizer ring",
        category: "Other Parts",
        image: require('../images/img85.jpg')
    },
    {
        name: "leaf spring",
        category: "Other Parts",
        image: require('../images/img86.jpg')
    },
    {
        name: "clutch/brake hose",
        category: "Other Parts",
        image: require('../images/img87.jpg')
    },
    {
        name: "water punp",
        category: "Other Parts",
        image: require('../images/img88.jpg')
    },
    {
        name: "filters",
        category: "Other Parts",
        image: require('../images/img89.jpg')
    },
    {
        name: "radiator",
        category: "Other Parts",
        image: require('../images/img90.jpg')
    },
    {
        name: "belt",
        category: "Other Parts",
        image: require('../images/img70.jpg')
    },
    {
        name: "transfer chain",
        category: "Other Parts",
        image: require('../images/img71.jpg')
    },
    {
        name: "clutch pump",
        category: "Other Parts",
        image: require('../images/img72.jpg')
    },
    {
        name: "cables",
        category: "Other Parts",
        image: require('../images/img73.jpg')
    },
    {
        name: "axle shaft",
        category: "Other Parts",
        image: require('../images/img74.jpg')
    },
    {
        name: "king pin kit",
        category: "Other Parts",
        image: require('../images/img75.jpg')
    },
    {
        name: "fuel pump",
        category: "Other Parts",
        image: require('../images/img76.jpg')
    },
    {
        name: "valve shim",
        category: "Other Parts",
        image: require('../images/img77.jpg')
    },
    {
        name: "cmc/bmc kit",
        category: "Other Parts",
        image: require('../images/img78.jpg')
    },
    {
        name: "chain guide",
        category: "Other Parts",
        image: require('../images/img79.jpg')
    },
    {
        name: "clutch booster",
        category: "Other Parts",
        image: require('../images/img81.jpg')
    },
    {
        name: "timing cover",
        category: "Other Parts",
        image: require('../images/img82.jpg')
    },
    {
        name: "inner spider",
        category: "Other Parts",
        image: require('../images/img83.jpg')
    },


]


export default partsData;