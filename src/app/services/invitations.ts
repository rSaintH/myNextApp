export async function inviteUser(emailAddress: string) {
    const url = process.env.URL;
    const response = await fetch(`${url}/api/invitations`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ emailAddress: emailAddress })
    })

    if (!response.ok) {
        throw new Error("Falha ao enviar convite");
    }

    return response.json()

}