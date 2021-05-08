import React from 'react'

const TermsAndConditions = () =>{
    return (
        <div>
        <h1 className="text-center m-3 jumbotron bg-dark text-white">Terms & Conditions</h1>
        <ol className="text-white">
          <li>
            This application stores your email address, name and other info only
            to improve user experience.We do not have any intention of misusing
            your data.
          </li>
          <li>
            We do not have direct control over teams and workspaces.
          </li>
          <li>
            We do not guarantee the authenticity of any person or information.
          </li>
          <li>
            Voice automation/control is only for on Chrome.The web speech-to-text api is currently experimental.
          </li>
          <li>
            We expect you to enter your correct details to ensure smooth
            service.
          </li>
          <li>We use cookies for smooth running of the application.</li>
        </ol>
        </div>
    )
}

export default TermsAndConditions
