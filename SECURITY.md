# Security Policy

We only provide official security updates for the current major release (e.g., `1.x`). Older versions may not be actively maintained or patched for vulnerabilities.

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 1.x     | ✅        |
| 0.x     | ❌        |

## Reporting a Vulnerability

We take security issues seriously and appreciate your efforts to responsibly disclose them. If you believe you have found a security vulnerability in this project, please follow these steps:

1. **Contact the Team**
   Send an email to **[security@yourdomain.com](mailto:security@yourdomain.com)** with a clear description of the issue, the steps to reproduce it, and any potential impact it may have.

2. **Do Not Disclose Publicly**
   Please do not file a public issue for a vulnerability, as it may put other users at risk. We ask that you keep any discovered vulnerabilities confidential until we have a fix in place.

3. **Confirmation**
   You should receive an acknowledgment of your report within **72 hours**. If you do not hear back, feel free to follow up.

4. **Fix & Disclosure**
   After we address the issue, we will release a fix as soon as possible. We will also publish a short advisory and acknowledge your contribution once the patch is made public.

## Scope

- Our project does not handle sensitive data like passwords or personal user information beyond normal usage.
- Please note that this library uses non-cryptographic randomness (e.g., `Math.random()`) and therefore is **not** intended for security-critical tasks.

## Resources

- [GitHub Security Documentation](https://docs.github.com/en/code-security)
- [Responsible Disclosure Guidelines](https://en.wikipedia.org/wiki/Responsible_disclosure)

Thank you for helping us keep this project secure!
