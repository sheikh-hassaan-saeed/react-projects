function ProfileCard({ name, role, department }) {

    const style = {
        card: {
            width: 200,
            height: 100,
            margin: "80px auto",
            backgroundColor: "#ffffff",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
            padding: 20,

        },
        name: { margin: "10 15", fontSize: 20, fontWeight: 700 },
        role: { margin: 0, fontSize: 14, color: "#6b7280" },
        department: { margin: 0, fontSize: 14, color: "#6b7280" },
    }

    return (
        <div style={style.card}>
            <h2 style={style.name}>{name}</h2>
            <p style={style.role}>{role}</p>
            <p style={style.department}>{department}</p>
        </div>

    );
}

export default ProfileCard;
