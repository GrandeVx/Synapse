export default function New_Sensor({setIsOpen}) {


    return(
        <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <a onClick={() => setIsOpen(true)}>
			<div className="mt-20 pt-5">
			<svg className="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            <p className="text-md text-center">Aggiungi Sensore</p>
			</div>
			</a>
		</div>
    )



}