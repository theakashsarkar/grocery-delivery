import {Link} from "react-router-dom"

function Breadcrump({children}) {
    return (
      <nav className="flex items-center gap-2 text-sm text-app-text-light mb-6">
       {children}
      </nav>
    )
}

function BreadcrumpItem({children, to, active=false}) {
  return (
  <>
     {to ? (
        <Link
        to={to}
        className="hover:text-green-900 transition-colors"
        >{children}
        </Link>
        ) : (
          <span className={
            active ? "text-green-900 font-medium" : ""
          }>{children}</span>
     )}
 {!active && (
        <span className="text-app-text-light">
          /
        </span>
      )}
  </>
  )
}
Breadcrump.Item = BreadcrumpItem;
export default Breadcrump
