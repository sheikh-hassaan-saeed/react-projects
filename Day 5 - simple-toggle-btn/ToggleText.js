function HandleClick() {
    const ButtonStyle = {
        width: 200,
        height: 110,
        backgroundColor: "orange",
        color: "white",
        border: "none",
        cursor: "pointer",
        margin: "100px auto",
        border: "2px solid black",
        color: "black",
        fontWeight: 700
    };

    const showAlert = () => {
        alert("Thanks for clicking buddy!");
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >

            <button style={ButtonStyle} onClick={showAlert}>
                Click me to see the magic
            </button>
        </div>
    );
}

export default HandleClick;
