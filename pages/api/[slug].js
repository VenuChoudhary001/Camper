const data = {
  campgrounds: [
    {
      _id: "X1nW12ce2",
      name: "Carisbad State Beach",
      city: "California",
      city_symbol: "CA",
      options: [
        {
          option_id: "0xaffX#0cn",
          option_name: "Campground Loops",
          options_list: {
             "Sites 1-21": false ,
             "Sites 45-71": false ,
             "Sites 88-111": false ,
          },
        },
        {
          option_id: "2mckmkxaffX#0cn",
          option_name: "Spot Type",
          options_list: {
             "Standard": false ,
             "RV/Trailer only": false ,
             "Group Tent only": false ,
          },
        },
      ],
    },
    {
      _id: "Z1nW12ce111",
      name: "Leo Carrilla",
      city: "California",
      city_symbol: "CA",
      options: [
        {
          option_id: "1xaffX#0cn",
          option_name: "Campground Loops",

          options_list: {
            "Sites 1-21": false ,
            "Sites 45-71": false ,
            "Sites 88-111": false ,
         },
        },
        {
          option_id: "kkmckmkxaffX#0cn",
          option_name: "Spot Type",
          options_list: {
             "Standard": false ,
             "RV/Trailer only": false ,
             "Group Tent only": false ,
          },
        },
      ],
    },
    {
      _id: "01nW12ce111",
      name: "San Clemente",
      city: "California",
      city_symbol: "CA",
      options: [
        {
          option_id: "2xaffX#0cn",
          option_name: "Campground Loops",

          options_list: {
            "Sites 1-21": false ,
            "Sites 45-71": false ,
            "Sites 88-111": false ,
         },
        },
        {
          option_id: "ZmckmkxaffX#0cn",
          option_name: "Spot Type",
          options_list: {
             "Standard": false ,
             "RV/Trailer only": false ,
             "Group Tent only": false ,
          },
        },
      ],
    },
    {
      _id: "A1nW12ce111",
      name: "Dohney State Beach",
      city: "California",
      city_symbol: "CA",
      options: [
        {
          option_id: "3xaffX#0cn",
          option_name: "Campground Loops",
          options_list: {
            "Sites 1-21": false ,
            "Sites 45-71": false ,
            "Sites 88-111": false ,
         },
        },
        {
          option_id: "5x2mckmkxaffX#0cn",
          option_name: "Spot Type",
          options_list: {
             "Standard": false ,
             "RV/Trailer only": false ,
             "Group Tent only": false ,
          },
        },
      ],
    },
    {
      _id: "N1nW12ce111",
      name: "Doolittle Campground",
      city: "Los Angeles",
      city_symbol: "LA",
      options: [
        {
          option_id: "4xaffX#0cn",
          option_name: "Campground Loops",
          options_list: {
            "Sites 1-21": false ,
            "Sites 45-71": false ,
            "Sites 88-111": false ,
         },
        },
        {
          option_id: "2m89ckmkxaffX#0cn",
          option_name: "Spot Type",
          options_list: {
             "Standard": false ,
             "RV/Trailer only": false ,
             "Group Tent only": false ,
          },
        },
      ],
    },
    {
      _id: "P1nW12ce111",
      name: "Dove Campground and Park",
      city: "New York",
      city_symbol: "NYC",
      options: [
        {
          option_id: "5xaffX#0cn",
          option_name: "Campground Loops",
          options_list: {
            "Sites 1-21": false ,
            "Sites 45-71": false ,
            "Sites 88-111": false ,
         },
        },
        {
          option_id: "9992mckmkxaffX#0cn",
          option_name: "Spot Type",
          options_list: {
             "Standard": false ,
             "RV/Trailer only": false ,
             "Group Tent only": false ,
          },
        },
      ],
    },
  ],
};

export default function (req, res) {
  let param = req.query.slug;
  let n = param.length;
  let result = data.campgrounds.filter(
    (item) => item.name.substring(0, n).toLowerCase() == param.toLowerCase()
  );
  res.status(200).json({ data: [...result] });
}
