import Link from "next/link"

function FAQ() {
  return (
    <div className="faq ml-auto sm:max-w-[50%] divide-y divide-[#39442B] rounded-xl bg-white">
  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg font-medium">What amenities do you offer?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
        <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
<rect x="10.4023" y="0.65625" width="3.2" height="24" fill="#39442B"/>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Refer to full list of amenities: <br />
      <Link className="underline" href="#amenities">Amenities List</Link> <br />
      For additional requests feel free to Whatsapp us at +6012-986 2373
    </p>
  </details>

  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg ">What are the Terms of Stay?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
        <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
<rect x="10.4023" y="0.65625" width="3.2" height="24" fill="#39442B"/>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
        </svg>
      </span>
    </summary>

  
     <ul className="mt-5 list-disc list-inside text-gray-700 font-bodyFont">
      <li>
        No parties allowed to ensure a peaceful environment for the neighbors.
      </li>
      <li>	Strictly no smoking in the villa.</li>
      <li>Please use the pool only in a swimsuit.</li>
      <li>Do not add soap or detergent to the pool.</li>
     </ul>
 
  </details>

   <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg ">What are the check-in & check-out times?</h2>

  <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
        <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
<rect x="10.4023" y="0.65625" width="3.2" height="24" fill="#39442B"/>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    Check in : 3pm 
    <br />Check out : 11am
    </p>
  </details>


   <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg ">What is the current room rate?</h2>

    <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
        <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
<rect x="10.4023" y="0.65625" width="3.2" height="24" fill="#39442B"/>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Kindly check the link below for all updated rates!
      <br />

      <Link className="underline text-llbrown" href='/booking'>Available Bookings</Link>
    </p>
  </details>


   <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg ">Can I cancel my reservation?</h2>

    <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
        <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
<rect x="10.4023" y="0.65625" width="3.2" height="24" fill="#39442B"/>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Kindly note that cancellations are not allowed once a reservation is made. However, in case of an emergency, we do offer the option to reschedule your stay, provided your request is made at least one week before your original check-in date.
    </p>
  </details>


   <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg ">How many pets are allowed?</h2>

     <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
        <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
<rect x="10.4023" y="0.65625" width="3.2" height="24" fill="#39442B"/>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
   We welcome pets and can accommodate up to 2 per stay. To help us maintain a clean and pleasant environment, we kindly ask for your cooperation. <br /><br /> A cleaning fee of RM50 per pet, per stay, will apply, and pets are strictly prohibited from entering the pool. <br /><br />
   Please ensure that any mess left by your pets is cleaned immediately to avoid stains or unpleasant odors for the next guest. We appreciate your understanding and cooperation.
    </p>
  </details>



   <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg ">How do I ask for pickup service?</h2>

     <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
        <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
<rect x="10.4023" y="0.65625" width="3.2" height="24" fill="#39442B"/>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="0.00195312" y="11.0625" width="24" height="3.2" fill="#39442B"/>
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      We do not provide pick up service.
    </p>
  </details>
</div>
  )
}

export default FAQ