import { InfiniteWall } from "@effect/infinite-wall/react";

export default function App() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			<div
				style={{
					overflow: "hidden",
					border: "1px solid red",
					height: 400,
					width: 700,
					margin: 100,
				}}
			>
				<InfiniteWall />
			</div>
		</div>
	);
}
