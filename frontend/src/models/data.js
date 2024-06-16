const houses = [
  {
    id: "1",
    imgUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Modern Villa with Ocean View",
    price: "$500.00",
    rating: "4.5",
    owner: "John Doe",
    address: "123 Ocean Drive, Miami, FL"
  },
  {
    id: "2",
    imgUrl: "https://images.pexels.com/photos/1895031/pexels-photo-1895031.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    title: "Cozy Cottage in the Woods",
    price: "$300.00",
    rating: "4.8",
    owner: "Jane Smith",
    address: "456 Forest Lane, Asheville, NC"
  },
  {
    id: "3",
    imgUrl: "https://images.pexels.com/photos/1458739/pexels-photo-1458739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Luxury Penthouse Downtown",
    price: "$800.00",
    rating: "3.9",
    owner: "Michael Johnson",
    address: "789 City Plaza, New York, NY"
  },
  {
    id: "4",
    imgUrl: "https://images.pexels.com/photos/4700551/pexels-photo-4700551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Rustic Cabin by the Lake",
    price: "$250.00",
    rating: "4.3",
    owner: "Emily Davis",
    address: "321 Lakeview Road, Tahoe, CA"
  },
  {
    id: "5",
    imgUrl: "https://images.pexels.com/photos/631964/pexels-photo-631964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Charming Townhouse in Historic District",
    price: "$400.00",
    rating: "4.5",
    owner: "Sarah Wilson",
    address: "654 History Blvd, Charleston, SC"
  },
  {
    id: "6",
    imgUrl: "https://images.pexels.com/photos/3016321/pexels-photo-3016321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mountain Retreat with Spectacular Views",
    price: "$600.00",
    rating: "4.0",
    owner: "David Martinez",
    address: "987 Mountain Pass, Aspen, CO"
  },
  {
    id: "7",
    imgUrl: "https://images.pexels.com/photos/7061676/pexels-photo-7061676.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Beachfront Paradise Villa",
    price: "$700.00",
    rating: "3.9",
    owner: "Laura Brown",
    address: "432 Beachfront Ave, Malibu, CA"
  },
  {
    id: "8",
    imgUrl: "https://images.pexels.com/photos/4119831/pexels-photo-4119831.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    title: "Urban Loft in the Heart of the City",
    price: "$350.00",
    rating: "4.0",
    owner: "James Taylor",
    address: "876 Downtown St, Chicago, IL"
  },
  {
    id: "9",
    imgUrl: "https://images.pexels.com/photos/10486204/pexels-photo-10486204.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    title: "Sunny Lakeside Retreat",
    price: "$450.00",
    rating: "4.7",
    owner: "Robert Anderson",
    address: "543 Sunshine Drive, Orlando, FL"
  },
  {
    id: "10",
    imgUrl: "https://images.pexels.com/photos/6207940/pexels-photo-6207940.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    title: "Historic Mansion with Garden Oasis",
    price: "$1200.00",
    rating: "4.8",
    owner: "Patricia Thomas",
    address: "210 Heritage Lane, Savannah, GA"
  },
  {
    id: "11",
    imgUrl: "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Secluded Cabin in the Mountains",
    price: "$300.00",
    rating: "3.6",
    owner: "Linda White",
    address: "123 Remote Trail, Boulder, CO"
  },
  {
    id: "12",
    imgUrl: "https://images.pexels.com/photos/7061672/pexels-photo-7061672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Luxurious Beach House with Pool",
    price: "$900.00",
    rating: "4.9",
    owner: "Daniel Harris",
    address: "456 Oceanfront, Santa Monica, CA"
  },
  {
    id: "13",
    imgUrl: "https://images.pexels.com/photos/4061979/pexels-photo-4061979.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    title: "Country Farmhouse Retreat",
    price: "$350.00",
    rating: "3.5",
    owner: "Barbara Clark",
    address: "789 Country Road, Nashville, TN"
  },
  {
    id: "14",
    imgUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "City Center Apartment with Stunning Views",
    price: "$250.00",
    rating: "5",
    owner: "Joseph Rodriguez",
    address: "321 Skyline Blvd, San Francisco, CA"
  },
  {
    id: "15",
    imgUrl: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Seaside Bungalow Retreat",
    price: "$400.00",
    rating: "3.7",
    owner: "Lisa Lewis",
    address: "654 Seaside Ave, Key West, FL"
  },
  {
    id: "16",
    imgUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Modern Loft with City View",
    price: "$550.00",
    rating: "4.6",
    owner: "Chris Evans",
    address: "123 Urban Lane, Los Angeles, CA"
  },
  {
    id: "17",
    imgUrl: "https://images.pexels.com/photos/2869557/pexels-photo-2869557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Countryside Villa with Garden",
    price: "$650.00",
    rating: "4.4",
    owner: "Anna Scott",
    address: "456 Greenfield Road, Austin, TX"
  },
  {
    id: "18",
    imgUrl: "https://images.pexels.com/photos/276599/pexels-photo-276599.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Luxury Condo in the City",
    price: "$750.00",
    rating: "4.2",
    owner: "Peter Parker",
    address: "789 Metro Street, Seattle, WA"
  },
  {
    id: "19",
    imgUrl: "https://images.pexels.com/photos/2848197/pexels-photo-2848197.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Beach House with Private Pool",
    price: "$850.00",
    rating: "4.7",
    owner: "Jessica Jones",
    address: "321 Coastal Road, Naples, FL"
  },
  {
    id: "20",
    imgUrl: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Penthouse with City Skyline View",
    price: "$950.00",
    rating: "4.9",
    owner: "Mark Lee",
    address: "654 Skyline Road, New York, NY"
  },
  {
    id: "21",
    imgUrl: "https://images.pexels.com/photos/1383644/pexels-photo-1383644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Spacious Family Home in Suburbia",
    price: "$550.00",
    rating: "4.3",
    owner: "Alice Green",
    address: "789 Suburb Lane, Dallas, TX"
  },
  {
    id: "22",
    imgUrl: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Modern Duplex with Pool",
    price: "$600.00",
    rating: "4.6",
    owner: "Jacob Brown",
    address: "123 Poolside Ave, Miami, FL"
  },
  {
    id: "23",
    imgUrl: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Country Cottage with Orchard",
    price: "$350.00",
    rating: "4.5",
    owner: "Nina White",
    address: "456 Orchard Road, Portland, OR"
  },
  {
    id: "24",
    imgUrl: "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Modern Apartment in Downtown",
    price: "$400.00",
    rating: "4.7",
    owner: "Lucas Martin",
    address: "789 Urban Ave, Boston, MA"
  },
  {
    id: "25",
    imgUrl: "https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Victorian House with Garden",
    price: "$650.00",
    rating: "4.4",
    owner: "Emma Johnson",
    address: "321 Historic Blvd, New Orleans, LA"
  },
  {
    id: "26",
    imgUrl: "https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Luxury House on Golf Course",
    price: "$900.00",
    rating: "4.8",
    owner: "Daniel Smith",
    address: "654 Golf View, Scottsdale, AZ"
  },
  {
    id: "27",
    imgUrl: "https://images.pexels.com/photos/276728/pexels-photo-276728.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Mountain Cabin with Scenic Views",
    price: "$750.00",
    rating: "4.2",
    owner: "Isabella Davis",
    address: "123 Mountain Trail, Denver, CO"
  },
  {
    id: "28",
    imgUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Townhouse in Quiet Neighborhood",
    price: "$400.00",
    rating: "4.1",
    owner: "Henry Wilson",
    address: "456 Peaceful Lane, Pittsburgh, PA"
  },
  {
    id: "29",
    imgUrl: "https://images.pexels.com/photos/276726/pexels-photo-276726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Modern Condo with City View",
    price: "$600.00",
    rating: "4.5",
    owner: "Grace Martinez",
    address: "789 Skyline Blvd, San Diego, CA"
  },
  {
    id: "30",
    imgUrl: "https://images.pexels.com/photos/276725/pexels-photo-276725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Suburban Home with Big Yard",
    price: "$500.00",
    rating: "4.3",
    owner: "Liam Anderson",
    address: "321 Suburb Drive, Phoenix, AZ"
  },
  {
    id: "31",
    imgUrl: "https://images.pexels.com/photos/276727/pexels-photo-276727.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Cabin in the Woods with Hot Tub",
    price: "$650.00",
    rating: "4.7",
    owner: "Sophia Lee",
    address: "456 Woodland Trail, Salem, OR"
  },
  {
    id: "32",
    imgUrl: "https://images.pexels.com/photos/276726/pexels-photo-276726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Modern Apartment Near University",
    price: "$400.00",
    rating: "4.1",
    owner: "Olivia King",
    address: "789 College Road, Ann Arbor, MI"
  },
  {
    id: "33",
    imgUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Coastal Cottage with Ocean View",
    price: "$750.00",
    rating: "4.8",
    owner: "Noah Clark",
    address: "321 Beachside Drive, Miami, FL"
  },
  {
    id: "34",
    imgUrl: "https://images.pexels.com/photos/276725/pexels-photo-276725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Penthouse with Rooftop Deck",
    price: "$950.00",
    rating: "4.9",
    owner: "Amelia Baker",
    address: "654 Downtown Blvd, Atlanta, GA"
  },
  {
    id: "35",
    imgUrl: "https://images.pexels.com/photos/276726/pexels-photo-276726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Charming Cottage with Garden",
    price: "$300.00",
    rating: "4.2",
    owner: "William Scott",
    address: "123 Garden Lane, Madison, WI"
  },
  {
    id: "36",
    imgUrl: "https://images.pexels.com/photos/276725/pexels-photo-276725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Luxury Condo Near Central Park",
    price: "$1200.00",
    rating: "4.7",
    owner: "James Moore",
    address: "456 Park Ave, New York, NY"
  },
  {
    id: "37",
    imgUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Villa with Infinity Pool",
    price: "$1000.00",
    rating: "4.8",
    owner: "Ella Green",
    address: "789 Hilltop Drive, Los Angeles, CA"
  },
  {
    id: "38",
    imgUrl: "https://images.pexels.com/photos/276725/pexels-photo-276725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Modern Home with Private Garden",
    price: "$550.00",
    rating: "4.4",
    owner: "Alexander White",
    address: "321 Quiet St, Seattle, WA"
  },
  {
    id: "39",
    imgUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Cozy Cabin in the Mountains",
    price: "$650.00",
    rating: "4.6",
    owner: "Mason Brown",
    address: "123 Mountain Path, Boulder, CO"
  },
  {
    id: "40",
    imgUrl: "https://images.pexels.com/photos/276726/pexels-photo-276726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Historic Home with Modern Amenities",
    price: "$750.00",
    rating: "4.8",
    owner: "Charlotte Davis",
    address: "456 Heritage Blvd, Charleston, SC"
  }
];

export default houses ;
