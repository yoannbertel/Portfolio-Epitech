const projects_element = document.querySelector("#projects")
const contact_element = document.querySelector("#center-contact")
const competences_element = document.querySelector("#center-competences")

const contact_name = document.querySelector("#input-name")
const contact_email = document.querySelector("#input-email")
const contact_reason = document.querySelector("#input-reason")
const contact_message = document.querySelector("#input-message")
const contact_sent_message = document.querySelector("#sent-message")
const webhook_url = "https://discord.com/api/webhooks/1508122625057099797/hwgoixjs2u-Ce9FedJqzQLBuV9BaJnJSFg_y116uGo2CKRh04l_4owcExLdByTarTAm7"

document.querySelector("#projects-button").addEventListener("click", () => {
	projects_element.scrollIntoView({"block": "start", "behavior": "smooth"})
})

document.querySelector("#contact-button").addEventListener("click", () => {
	contact_element.scrollIntoView({"block": "center", "behavior": "smooth"})
})

document.querySelector("#competences-button").addEventListener("click", () => {
	competences_element.scrollIntoView({"block": "center", "behavior": "smooth"})
})

document.querySelector("#contact-send").addEventListener("click", async () => {
	const res = await fetch(webhook_url, {
		"method": "POST",
		"headers": {
			"Content-Type": "application/json"
		},
		"body": JSON.stringify({
			"embeds": [{
				"title": "Reason: "+contact_reason.value,
				"description": contact_message.value,
				"author": {
					"name": `${contact_name.value} (${contact_email.value})`
				}
			}],
			"username": "Portfolio contact"
		})
	})

	if (!res.ok) {
		contact_sent_message.textContent = "Échec de l'envoi"
		return undefined
	}

	contact_sent_message.textContent = "Message envoyé!"

	contact_name.value = ""
	contact_email.value = ""
	contact_reason.value = ""
	contact_message.value = ""
})