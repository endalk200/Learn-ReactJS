import React, { Fragment } from "react";

export const InputField = React.forwardRef(
	({ as: type = "text", name, label, placeholder = "", className = "" }, ref) => {
		return (
			<Fragment>
				<p className={className}>
					<label style={{ marginInline: "10px" }} htmlFor={name}>
						{label}
					</label>
				</p>
				<p className={className}>
					<input
						style={{ width: "300px" }}
						ref={ref}
						name={name}
						type={type}
						placeholder={placeholder === "" ? label : placeholder}
					/>
				</p>
			</Fragment>
		);
	}
);
