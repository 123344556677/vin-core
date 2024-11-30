// // 'use cient';

// import React, { useState } from 'react'
// import { Country, State } from "country-state-city";

// const PaymentForm = () => {
  
//   const countries = Country.getAllCountries();
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState(null);
  

//   const handleCountryChange = (e) => {
//     const country = countries.find((c) => c.isoCode === e.target.value);
//     setSelectedCountry(country);
//     setStates(State.getStatesOfCountry(country?.isoCode));
//     setSelectedState(null);
//   };
//   return (
//     <div>
//       <form className="space-y-4">
//             <input
//               type="text"
//               name="vin"
//               placeholder="Enter VIN (17 digits)"
//               maxLength={17}
//               className="w-full border rounded-md p-3"
//               required
//             />
//             <input
//               type="text"
//               name="licensePlate"
//               placeholder="License Plate Number"
//               className="w-full border rounded-md p-3"
//               required
//             />
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 className="w-full border rounded-md p-3"
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 className="w-full border rounded-md p-3"
//                 required
//               />
//             </div>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               className="w-full border rounded-md p-3"
//               required
//             />
//             <div>
//               <label htmlFor="country" className="block mb-2">
//                 Country
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 className="w-full border rounded-md p-3"
//                 onChange={handleCountryChange}
//               >
//                 <option value="">Select Country</option>
//                 {countries.map((country) => (
//                   <option key={country.isoCode} value={country.isoCode}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label htmlFor="state" className="block mb-2">
//                 State
//               </label>
//               <select
//                 id="state"
//                 name="state"
//                 className="w-full border rounded-md p-3"
//                 disabled={!selectedCountry}
//                 onChange={(e) => setSelectedState(e.target.value)}
//               >
//                 <option value="">Select State</option>
//                 {states.map((state) => (
//                   <option key={state.isoCode} value={state.isoCode}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <input
//               type="text"
//               name="address"
//               placeholder="Full Address"
//               className="w-full border rounded-md p-3"
//               required
//             />
//             <input
//               type="text"
//               name="city"
//               placeholder="Town/City"
//               className="w-full border rounded-md p-3"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-primary text-white py-3 rounded-md"
//             >
//               Submit
//             </button>
//           </form>
//     </div>
//   )
// }

// export default PaymentForm