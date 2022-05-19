

export default function Info_Mini({title, measure , setIsOpen}) {

    return(
        <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
			<div className="h-40 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1652610797951-c9992b49496a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331')] rounded-lg">
            </div>
			<div className="flex flex-col items-start mt-4">
				<h4 className="text-xl font-semibold">{title}</h4>
				<p className="text-sm">Ultimo Aggiornamento : {measure}cm</p>
				<a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase text-white" onClick={() => setIsOpen(true)}>Informazioni</a>
			</div>
		</div>
    )


}