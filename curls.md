# MewCP Auth API - Test Curls

Base URL: `http://localhost:5656`

---

## 1. POST /oauth/{provider}/start

### 200 - Valid key
```bash
curl -s -X POST http://localhost:5656/oauth/google-gmail/start \
  -H "Authorization: Bearer mewcp_acct_85b497004a974aacd565db0d3a4a97acb7a202d766cf2da4465540ac59d24fd7" \
  -H "Content-Type: application/json" \
  -d '{
    "externalUserId": "test-user-123",
  
    "externalUserMeta": { "name": "Test User", "email": "test@example.com" }
  }'
```
response : {"authUrl":"https://accounts.google.com/o/oauth2/v2/auth?client_id=678297187589-7k7umv3986o0h1csqn0o3mld3tb9f30l.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A5656%2Foauth%2Fcallback&response_type=code&state=a38a39dfed2e4e6f7ba164a7580d7168589a85c725aa5102110eadaafe0e506d&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.modify+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.send+openid+email+profile","state":"a38a39dfed2e4e6f7ba164a7580d7168589a85c725aa5102110eadaafe0e506d"}


### 401 - Invalid key
```bash
curl -s -X POST http://localhost:5656/oauth/google/start \
  -H "Authorization: Bearer mewcp_acct_invalid" \
  -H "Content-Type: application/json" \
  -d '{ "externalUserId": "test-user-123" }'
```

---
response : {"error":"unauthorized","message":"Invalid or revoked account API key"}


## 2. POST /credentials/static/{providerSlug}/connect

### 200 - Valid key
```bash
curl -s -X POST http://localhost:5656/credentials/static/gemini/connect \
  -H "Authorization: Bearer mewcp_acct_85b497004a974aacd565db0d3a4a97acb7a202d766cf2da4465540ac59d24fd7" \
  -H "Content-Type: application/json" \
  -d '{
    "externalUserId": "test-user-123",
    
    "externalUserMeta": { "name": "Test User", "email": "test@example.com" }
  }'
```

response : {"hostedFormUrl":"http://localhost:5656/connect/static?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWQyOTgwMjJlZTU4MzFjM2UwZTA3MjUiLCJvcmdJZCI6IjEiLCJleHRlcm5hbFVzZXJJZCI6InRlc3QtdXNlci0xMjMiLCJwcm92aWRlclNsdWciOiJnZW1pbmkiLCJmcm9udGVuZENhbGxiYWNrVXJsIjpudWxsLCJleHRlcm5hbFVzZXJNZXRhIjp7Im5hbWUiOiJUZXN0IFVzZXIiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20ifSwiaWF0IjoxNzgwNDg4MTk4LCJleHAiOjE3ODA0ODg0OTh9.X3uLPcKtmdG35Ouk1DTHUFuHyXQreDNQ3EZk2GNQ7WQ","expiresInMinutes":5}

### 401 - Invalid key
```bash
curl -s -X POST http://localhost:5656/credentials/static/gemini/connect \
  -H "Authorization: Bearer mewcp_acct_invalid" \
  -H "Content-Type: application/json" \
  -d '{ "externalUserId": "test-user-123" }'
```
response : {"error":"unauthorized","message":"Invalid or revoked account API key"}
---

## 3. GET /end-users

### 200 - Valid key
```bash
curl -s -X GET http://localhost:5656/end-users \
  -H "Authorization: Bearer mewcp_acct_85b497004a974aacd565db0d3a4a97acb7a202d766cf2da4465540ac59d24fd7"
```
response : [{"externalUserId":"test-user-123","meta":{"name":"Test User","email":"test@example.com"},"connectedProviders":["gemini","google-gmail"],"credentialCount":2,"lastUpdated":"2026-06-03T12:04:17.154Z"},{"externalUserId":"test-user-1234","meta":{"name":"Test User","email":"test@example.com"},"connectedProviders":["google-gmail"],"credentialCount":1,"lastUpdated":"2026-06-01T08:15:51.445Z"}]

### 401 - Invalid key
```bash
curl -s -X GET http://localhost:5656/end-users \
  -H "Authorization: Bearer mewcp_acct_invalid"
```
response : {"error":"unauthorized","message":"Invalid or revoked account API key"}
---

## 4. GET /end-users/{externalUserId}

### 200 - Valid key
```bash
curl -s -X GET http://localhost:5656/end-users/test-user-123 \
  -H "Authorization: Bearer mewcp_acct_85b497004a974aacd565db0d3a4a97acb7a202d766cf2da4465540ac59d24fd7"
```

response : {"externalUserId":"test-user-123","meta":{"name":"Test User","email":"test@example.com"},"credentials":[{"credentialId":"8cf89a9e5054754dc3941057202aed85","providerSlug":"google-gmail","label":"rohitgite1419@gmail.com","authType":"oauth","scopes":["https://www.googleapis.com/auth/gmail.modify","https://www.googleapis.com/auth/gmail.readonly","https://www.googleapis.com/auth/gmail.send","openid","email","profile"],"expiresAt":"2026-06-03T12:58:54.185Z"},{"credentialId":"9e9c513174def62142b1e621fa8bc98e","providerSlug":"gemini","label":"Gemini - test-user-123","authType":"static","scopes":[],"expiresAt":null}]}

### 401 - Invalid key
```bash
curl -s -X GET http://localhost:5656/end-users/test-user-123 \
  -H "Authorization: Bearer mewcp_acct_invalid"
```
response : {"error":"unauthorized","message":"Invalid or revoked account API key"}
---

## 5. DELETE /end-users/{externalUserId}  ⚠️ destructive

### 200 - Valid key
```bash
curl -s -X DELETE http://localhost:5656/end-users/test-user-1234 \
  -H "Authorization: Bearer mewcp_acct_85b497004a974aacd565db0d3a4a97acb7a202d766cf2da4465540ac59d24fd7"
```

response : {"success":true,"revokedCount":1}

### 401 - Invalid key
```bash
curl -s -X DELETE http://localhost:5656/end-users/test-user-1234 \
  -H "Authorization: Bearer mewcp_acct_invalid"
```
response : {"error":"unauthorized","message":"Invalid or revoked account API key"}
---

## 6. DELETE /end-users/{externalUserId}/credentials/{credentialId}

> Get a `credentialId` from the GET /end-users/test-user-123 response above first.

### 200 - Valid key
```bash
curl -s -X DELETE http://localhost:5656/end-users/test-user-123/credentials/9e9c513174def62142b1e621fa8bc98e \
  -H "Authorization: Bearer mewcp_acct_85b497004a974aacd565db0d3a4a97acb7a202d766cf2da4465540ac59d24fd7"
```
response : {"success":true,"credentialId":"9e9c513174def62142b1e621fa8bc98e"}
error response : {"error":"not_found","message":"Credential not found"}

### 401 - Invalid key
```bash
curl -s -X DELETE http://localhost:5656/end-users/test-user-123/credentials/CREDENTIAL_ID_HERE \
  -H "Authorization: Bearer mewcp_acct_invalid"
```
response : {"error":"unauthorized","message":"Invalid or revoked account API key"}