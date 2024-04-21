import React from "react";

const App = (props: any) => {
	const { data, getSectionInfo, settings, app } = props;
	console.log(props);

	console.log(data);

	return (
		<div className="" id="my-obsidian-plugin">
			<div className="flex flex-col gap-5">
				<div className="border bg-black p-10 rounded-sm">{data}</div>
				<button className="bg-red-500 rounded-md hover:bg-red-200 w-fit">
					click me
				</button>
				<button className="w-fit">default style button</button>
			</div>
		</div>
	);
};

export default App;
