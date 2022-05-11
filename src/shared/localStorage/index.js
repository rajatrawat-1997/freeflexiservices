import React, { useState } from 'react';
import Persona from 'persona';


export default function Kyc(){

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