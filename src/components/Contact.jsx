import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-600"><Mail className="h-4 w-4" /> Get in touch</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Contact</h2>
          <p className="mt-3 text-gray-600">Have a project in mind or just want to say hi? Drop a message — I usually reply within a day.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required value={form.name} onChange={onChange} className="w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required value={form.email} onChange={onChange} className="w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" required rows={5} value={form.message} onChange={onChange} className="w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Tell me about your project..." />
          </div>
          <div className="mt-6 flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20">
              <Send className="h-4 w-4" /> {sent ? 'Sent!' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
