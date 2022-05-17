

export default function Info_Mini({title, measure , setIsOpen}) {

    return(
        <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
			<div className="h-40 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')] rounded-lg">
            </div>
			<div className="flex flex-col items-start mt-4">
				<h4 className="text-xl font-semibold">{title}</h4>
				<p className="text-sm">{measure}</p>
				<a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase text-white" onClick={() => setIsOpen(true)}>Informazioni</a>
			</div>
		</div>
    )


}