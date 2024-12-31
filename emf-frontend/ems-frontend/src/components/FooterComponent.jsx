import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <div className="row">
          {/* Footer Logo/Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Employee Management</h5>
            <p>Manage your employees with ease.</p>
          </div>
          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/employees" className="text-light text-decoration-none">
                  Employees
                </a>
              </li>
              <li>
                <a href="/add-employee" className="text-light text-decoration-none">
                  Add Employee
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-0">
              <i className="bi bi-envelope"></i> support@ems.com
            </p>
            <p className="mb-0">
              <i className="bi bi-telephone"></i> +1 234 567 890
            </p>
            <p className="mb-0">
              <i className="bi bi-geo-alt"></i> 123 Main Street, Gotham City
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        {/* Footer Bottom */}
        <div>
          <p className="mb-0">&copy; {new Date().getFullYear()} Employee Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
