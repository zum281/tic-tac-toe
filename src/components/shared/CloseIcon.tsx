import { FunctionComponent as FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const CloseIcon: FC<Props> = ({
	width = "16",
	height = "16",
	viewBox = "0 0 44 44",
	...rest
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			aria-hidden='true'
			focusable='false'
			{...rest}>
			<path d='M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z' />
			<path d='M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z' />
		</svg>
	);
};
