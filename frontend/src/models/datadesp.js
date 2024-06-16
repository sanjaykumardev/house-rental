const description = [
  {
    id: "1",
    title: "Modern Villa with Ocean View",
    imgUrl: "https://example.com/house1.jpg",
    address: "123 Oceanfront Avenue, Beach City",
    description: "Escape to this stunning modern villa located right on the oceanfront. Enjoy panoramic views of the sea from every room. This luxurious property features spacious living areas, a private pool, and direct beach access.",
    rating: "4.5",
    price: "$500 per night",
    ownerName: "John Doe",
    ownerNumber: "+1234567890"
  },
  {
    id: "2",
    title: "Cozy Cottage in the Woods",
    imgUrl: "https://example.com/house2.jpg",
    address: "456 Forest Lane, Woodland Village",
    description: "Experience tranquility in this charming cottage nestled amidst the woods. Perfect for a romantic getaway or a peaceful retreat, this cozy cottage offers rustic charm with modern amenities.",
    rating: "4.8",
    price: "$300 per night",
    ownerName: "Jane Smith",
    ownerNumber: "+1987654321"
  },
  {
    id: "3",
    title: "Luxury Penthouse Downtown",
    imgUrl: "https://example.com/house3.jpg",
    address: "789 High Street, Metropolitan City",
    description: "Live the high life in this luxurious penthouse located in the heart of the city. With breathtaking views of the skyline and top-notch amenities, this penthouse offers unparalleled comfort and style.",
    rating: "4.9",
    price: "$800 per night",
    ownerName: "David Johnson",
    ownerNumber: "+1357924680"
  },
  {
    id: "4",
    title: "Rustic Cabin by the Lake",
    imgUrl: "https://example.com/house4.jpg",
    address: "101 Lakeside Road, Serene Village",
    description: "Embrace nature in this charming rustic cabin nestled by the lake. Surrounded by towering trees and serene waters, this cabin offers the perfect escape from city life.",
    rating: "4.3",
    price: "$250 per night",
    ownerName: "Emily Brown",
    ownerNumber: "+8765432109"
  },
  {
    id: "5",
    title: "Charming Townhouse in Historic District",
    imgUrl: "https://example.com/house5.jpg",
    address: "222 Heritage Street, Historic Town",
    description: "Step back in time in this charming townhouse located in the historic district. With its classic architecture and modern comforts, this townhouse offers a unique blend of old-world charm and contemporary living.",
    rating: "4.7",
    price: "$400 per night",
    ownerName: "Michael Wilson",
    ownerNumber: "+1122334455"
  },
  {
    id: "6",
    title: "Mountain Retreat with Spectacular Views",
    imgUrl: "https://example.com/house6.jpg",
    address: "333 Mountain Avenue, Scenic Village",
    description: "Escape to the mountains in this stunning retreat with panoramic views of the surrounding landscape. Whether you're seeking adventure or relaxation, this mountain retreat offers the perfect getaway.",
    rating: "4.6",
    price: "$600 per night",
    ownerName: "Sarah Taylor",
    ownerNumber: "+9988776655"
  },
  {
    id: "7",
    title: "Beachfront Paradise Villa",
    imgUrl: "https://example.com/house7.jpg",
    address: "444 Paradise Road, Coastal Town",
    description: "Experience paradise in this luxurious villa located right on the beachfront. With its private beach access and breathtaking ocean views, this villa offers the ultimate beach getaway.",
    rating: "4.9",
    price: "$700 per night",
    ownerName: "Robert Martinez",
    ownerNumber: "+3344556677"
  },
  {
    id: "8",
    title: "Urban Loft in the Heart of the City",
    imgUrl: "https://example.com/house8.jpg",
    address: "555 City Avenue, Downtown District",
    description: "Live in style in this sleek urban loft situated in the heart of the city. With its modern design and convenient location, this loft offers city living at its finest.",
    rating: "4.4",
    price: "$350 per night",
    ownerName: "Olivia White",
    ownerNumber: "+7788990011"
  },
  {
    id: "9",
    title: "Sunny Lakeside Retreat",
    imgUrl: "https://example.com/house9.jpg",
    address: "666 Lakeside Drive, Sunny Village",
    description: "Relax and unwind in this sunny lakeside retreat surrounded by picturesque views. With its tranquil setting and comfortable accommodations, this retreat is the perfect destination for a peaceful getaway.",
    rating: "4.7",
    price: "$350 per night",
    ownerName: "Olivia White",
    ownerNumber: "+7788990011",
  },
  {
    id: "10",
    title: "Secluded Mountain Cabin",
    imgUrl: "https://example.com/house10.jpg",
    address: "777 Mountain Road, Secluded Valley",
    description: "Escape to this secluded mountain cabin nestled in the heart of nature. Surrounded by pristine wilderness and breathtaking views, this cabin offers the perfect retreat for those seeking peace and tranquility.",
    rating: "4.6",
    price: "$400 per night",
    ownerName: "Emma Clark",
    ownerNumber: "+6677889900"
  },
  {
    id: "11",
    title: "Riverside Retreat",
    imgUrl: "https://example.com/house11.jpg",
    address: "888 Riverbank Lane, Serene Village",
    description: "Relax by the river in this charming riverside retreat. With its peaceful setting and cozy accommodations, this retreat offers a serene escape from the hustle and bustle of everyday life.",
    rating: "4.7",
    price: "$300 per night",
    ownerName: "William Turner",
    ownerNumber: "+5566778899"
  },
  {
    id: "12",
    title: "Historic Mansion",
    imgUrl: "https://example.com/house12.jpg",
    address: "999 Heritage Street, Historic Town",
    description: "Step back in time in this grand historic mansion. With its elegant architecture and luxurious amenities, this mansion offers a glimpse into the past with all the comforts of modern living.",
    rating: "4.9",
    price: "$1000 per night",
    ownerName: "Sophia Anderson",
    ownerNumber: "+4455667788"
  },
  {
    id: "13",
    title: "Lakefront Log Cabin",
    imgUrl: "https://example.com/house13.jpg",
    address: "1010 Lakeview Drive, Lakeside Village",
    description: "Experience the charm of lakefront living in this cozy log cabin. Nestled along the shore of the lake, this cabin offers stunning views and a peaceful atmosphere for a relaxing getaway.",
    rating: "4.5",
    price: "$350 per night",
    ownerName: "James Lee",
    ownerNumber: "+1122334455"
  },
  {
    id: "14",
    title: "Sunny Beach House",
    imgUrl: "https://example.com/house14.jpg",
    address: "1111 Beachfront Road, Sunny Resort",
    description: "Enjoy sun, sand, and surf in this bright and airy beach house. Located just steps away from the ocean, this house offers the perfect beach getaway for families and friends.",
    rating: "4.8",
    price: "$600 per night",
    ownerName: "Ava Brown",
    ownerNumber: "+2233445566"
  },
  {
    id: "15",
    title: "Hilltop Retreat with Panoramic Views",
    imgUrl: "https://example.com/house15.jpg",
    address: "1212 Hillcrest Drive, Scenic Village",
    description: "Escape to this hilltop retreat with breathtaking panoramic views of the surrounding countryside. With its secluded location and luxurious accommodations, this retreat offers the perfect blend of relaxation and luxury.",
    rating: "4.9",
    price: "$800 per night",
    ownerName: "Liam Garcia",
    ownerNumber: "+3344556677"
  }
];

export default description;