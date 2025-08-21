import { Link, useLocation } from "react-router-dom";
import "./Routebar.css";

function Routebar() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const routeNames = {
    wishlist: "Lista de desejos",
    profile: "Perfil",
  };

  const formatName = (name) => {
    return routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="routeBar">
      <div className="routes">
        {pathnames.length === 0 ? (
          <span className="routeLink active">Home</span>
        ) : (
          <>
            <Link to="/" className="routeLink">
              Home
            </Link>
            {pathnames.map((name, index) => {
              const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;
              return (
                <span key={name}>
                  <span className="routeSeparator">/</span>
                  {isLast ? (
                    <span className="routeLink active">
                      {formatName(name)}
                    </span>
                  ) : (
                    <Link to={routeTo} className="routeLink">
                      {formatName(name)}
                    </Link>
                  )}
                </span>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Routebar;