import React, {Component} from 'react';
import Persona from 'persona';
export class IdentityVerificationByGovermentId extends Component {
 
render () {
        return (
           
        <Persona.Inquiry
          templateId='tmpl_jJNkkpzhvApsNuVgqUF9G296'
          environment='sandbox'
          onLoad={() => { console.log('Loaded inline'); }}
          onComplete={({ inquiryId, status, fields }) => {
              // Inquiry completed. Optionally tell your server about it.
            console.log(`Sending finished inquiry ${inquiryId} to backend`);
            fetch(`/server-handler?inquiry-id=${inquiryId}`);
          }}
        />
        
        );

    }
}
export default IdentityVerificationByGovermentId;