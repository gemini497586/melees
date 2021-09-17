import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ isAuth, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return children
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
