const nearbyCompanies = [
  { name: "Blue Square 360", address: "St Saviours Wharf, London SE1 2BE" },
  {
    name: "Gallus Consulting",
    address:
      "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG"
  },
  {
    name: "Gallus Consulting",
    address: "No1 Royal Exchange, London, EC3V 3DG"
  }
];

const farCompanies = [
  {
    id: 8,
    urlName: "lead-tcml",
    organization: "LEAD TCM&L",
    customerLocations: "in Europe, UAE and Japan",
    willWorkRemotely: true,
    website: "http://www.leadtcml.com",
    services:
      "LEAD TCM&L is a Management Consulting and Organizational Development company specialized in evidence-based approaches to Change Management, Human Capital and Leadership Development. We use 360 feedback as an assessment tool in coaching, training, change initiatives and talent management. ",
    offices: [
      {
        location: "Rotterdam, Netherlands",
        address:
          "Rivium Oostlaan 35a, 2909 LL Capelle aan den IJssel, The Netherlands",
        coordinates: "51.9107013,4.547834200000011"
      }
    ]
  },
  {
    id: 14,
    urlName: "dwconsulting",
    organization: "Darren Williams Consulting",
    customerLocations: "across Australia",
    willWorkRemotely: true,
    website: "http://www.dwconsulting.com.au/",
    services:
      "We specialize in Leadership Development and Executive Coaching. Ultimately, leadership development is a process of self development and Spidergap 360 is a great tool for raising awareness of our style and impact on others. We can work with you to design and deliver powerful learning opportunitities.",
    offices: [
      {
        location: "Adelaide",
        address: "Adelaide, Australia",
        coordinates: "-34.9284989,138.60074559999998"
      }
    ]
  }
];

module.exports.farCompanies = farCompanies;
module.exports.nearbyCompanies = nearbyCompanies;
