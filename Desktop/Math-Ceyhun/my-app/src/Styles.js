const Styles = {
	chat: {
		profile: {
			container: {
				main: {
					width: "98vw",
					height: "30vh",
					backgroundColor: "white",
					overflow: "hidden",
					outline: "none",
					border: "0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row"

				},
				navigation: {
					width: "98vw",
					height: "8vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "0",
					position: "fixed",
					top: "0vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
					borderTopLeftRadius: "20px",
					borderBottomLeftRadius: "20px"

				},
				profile: {
					width: "17vw",
					height: "8vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					float: "left"
				},
				one: {
					width: "78vw",
					height: "10vh",
					backgroundColor: "white",
					overflow: "hidden",
					outline: "none",
					border: "0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					float: "right"
				},
				two: {
					width: "78vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderTopRightRadius: "20px",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexDirection: "row"
				},
				three: {
					width: "78vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderBottomRightRadius:"20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}
			},
			item: {
				profile: {
					width: "25.5vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					float: "left"
				},
				balance: {
					width: "25.5vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					float: "right"
				},
				status: {
					width: "51vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"	
				}
			}
		},
		find: {
			container: {
				one: {
					width: "98vw",
					height: "10vh",
					backgroundColor: "white",
					overflow: "hidden",
					outline: "none",
					border: "0",
					position: "fixed",
					top: "10vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row"
				},
				two: {
					width: "88vw",
					height: "8vh",
					backgroundColor: "white",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					float: "left"
							
				},
				three: {
					width: "10vw",
					height: "8vh",
					backgroundColor: "white",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flot: "right"
				}
			},
			item: {
				query: {
					width: "88vw",
					height: "8vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "0",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				},
				find: {
					width: "10vw",
					height: "8vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					float: "left"

				}
			}					
		},
		action: {
			container: {
				width: "98vw",
				height: "10vh",
				backgroundColor: "white",
				overflow: "hidden",
				outline: "none",
				border: "0",
				position: "fixed",
				top: "20vh",
				display: "flex",
				justifyContent: "space-evenly",
				alignItems: "center",
				flexDirection: "row"
			},
			item: {
				width: "18.5vw",
				height: "8vh",
				borderRadius: "20px",
				backgroundColor: "white",
				overflow: "hidden",
				outline: "none",
				border: "0",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}
		},
		toggle: {
			container: {
				width: "98vw",
				height: "10vh",
				border: "0",
				position: "fixed",
				top: "30vh",
				outline: "none",
				overflow: "hidden",
				backgroundColor: "white",
				display: "flex",
				justifyContent: "space-evenly",
				alignItems: "center",
				flexDirection: "row"
			},
			item: {
				width: "41.5vw",
				height: "8vh",
				border: "0",
				outline: "none",
				backgroundColor: "grey",
				overflow: "hidden",
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}
		},
		deets: {
			container: {
				main: {
					width: "98vw",
					height: "60vh",
					backgroundColor: "white",
					overflowY: "scroll",
					outline: "none",
					border: "0",
					position: "relative",
					top: "38vh",
					display: "flex",
					flexDirection: "column"
				},
				chat: {
					width: "98vw",
					height: "10vh",
					backgroundColor: "white",
					overflow: "hidden",
					outline: "none",
					border: "0",
					display: "flex",
					flexDirection: "row"	
				},
				profile: {
					width: "10vw",
					height: "10vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					marginRight: "1vw",
					borderRadius: "17.5vw",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					float: "left"
				},
				one: {
					width: "72.5vw",
					height: "10vh",
					backgroundColor: "white",
					overflow: "hidden",
					outline: "none",
					border: "0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					marginBottom: "2vh"
				},
				two: {
					width: "72.5vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexDirection: "row",
					borderTopRightRadius: "20px"
				},
				three: {
					width: "72.5vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderBottomLeftRadius: "20px",
					borderBottomRightRadius: "20px"
				}
			},
			item: {
				sender: {
					width: "25.5vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					float: "left"
				},
				sent: {
					width: "25.5vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					float: "right"
				},
				chat: {
					width: "51vw",
					height: "4vh",
					backgroundColor: "grey",
					overflow: "hidden",
					outline: "none",
					border: "none",
					borderRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"	
				}
			}
		}
	}
}

export default Styles
