import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,

  FaFilter,
} from "react-icons/fa";

import collage from "../../assets/campus-hd.png";

function Locations() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const handleReserve = (locationId) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    navigate("/login");
    return;
  }

  navigate(`/location/${locationId}`);
};

  const locations = [
    {
      id: 1,
      college: "JBIET",
      city: "Hyderabad",
      area: "Main Canteen Area",
      students: "5,000+",
      status: "Reserved",
      image: collage,
    },
    {
      id: 2,
      college: "JBREC",
      city: "Hyderabad",
      area: "Central Canteen Hub",
      students: "4,000+",
      status: "Reserved",
      image: collage,
    },
    {
      id: 3,
      college: "KG Reddy College",
      city: "Hyderabad",
      area: "College Cafeteria",
      students: "5,500+",
      status: "Reserved",
      image: collage,
    },
    {
      id: 4,
      college: "VBIET",
      city: "Hyderabad",
      area: "Main Canteen Area",
      students: "5,000+",
      status: "Available",
      image: collage,
    },
    {
      id: 5,
      college: "CMR",
      city: "Hyderabad",
      area: "Canteen",
      students: "12,000+",
      status: "Available",
      image: collage,
    },
    {
      id: 6,
      college: "GLOBAL COLLAGE",
      city: "Hyderabad",
      area: "Tech Park Food Court",
      students: "4,000+",
      status: "Available",
      image: collage,
    },
    {
      id: 7,
      college: "MGIET",
      city: "Hyderabad",
      area: "Main Canteen Area",
      students: "5,000+",
      status: "Available",
      image: collage,
    },
  ];
  const filteredLocations = locations.filter((item) => {
  const matchesSearch =
    item.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.area.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCity =
    cityFilter === "All" || item.city === cityFilter;

  const matchesStatus =
    statusFilter === "All" || item.status === statusFilter;

  return matchesSearch && matchesCity && matchesStatus;
});
const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;

const currentLocations = filteredLocations.slice(
  indexOfFirstCard,
  indexOfLastCard
);

const totalPages = Math.ceil(
  filteredLocations.length / cardsPerPage
);


  return (
    <section className="locations-section">
      <div className="container">

        {/* Filters */}
        <div className="locations-filters">

          <div className="search-box">
            <FaSearch />
            <input
  type="text"
  placeholder="Search by college, city or area..."
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }}
/>
          </div>

          <select
  value={cityFilter}
  onChange={(e) => {
    setCityFilter(e.target.value);
    setCurrentPage(1);
  }}
>
            <option value="All">All Cities</option>
            <option value="Hyderabad">Hyderabad</option>
            
          </select>

          <select
  value={statusFilter}
  onChange={(e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  }}
>
  <option value="All">All Status</option>
  <option value="Available">Available</option>
  <option value="Reserved">Reserved</option>
  <option value="Under Review">Under Review</option>
</select>

          <button className="filter-btn">
            <FaFilter />
            Filters
          </button>

        </div>

        {/* Cards */}
        <div className="locations-grid">

          {currentLocations.map((location) => (
            <div className="location-card" key={location.id}>

              <div className="image-wrapper">
                <img
                  src={location.image}
                  alt={location.college}
                  className="location-image"
                />

                <span
                  className={`status-badge ${location.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {location.status}
                </span>
              </div>

              <div className="location-content">

                <div className="location-header">
                  <h3>{location.college}</h3>

                  <span className="location-city">
                    <FaMapMarkerAlt />
                    {location.city}
                  </span>
                </div>

                <p className="location-area">
                  {location.area}
                </p>

                <hr />

                <div className="location-footer">

                  <div>
                    <small>STUDENT STRENGTH</small>
                    <h5>{location.students}</h5>
                  </div>

                  {location.status === "Available" ? (
  <button
  className="reserve-btn"
  onClick={() => handleReserve(location.id)}
>
  Reserve Now
</button>
) : (
  <button className="reserved-btn" disabled>
    {location.status}
  </button>
)}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Pagination */}

        <div className="pagination-wrapper">

  <button
    className="page-btn"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    ‹
  </button>

  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      className={`page-btn ${
        currentPage === index + 1 ? "active" : ""
      }`}
      onClick={() => setCurrentPage(index + 1)}
    >
      {index + 1}
    </button>
  ))}

  <button
    className="page-btn"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    ›
  </button>

</div>

      </div>
    </section>
  );
}

export default Locations;