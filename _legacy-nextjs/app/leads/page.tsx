'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Download, LogOut, Phone, User, Home, MapPin, IndianRupee, Calendar } from 'lucide-react'

const EMAIL = 'dailyleads@gmail.com'
const PASSWORD = 'DLead@7890'
const AUTH_KEY = 'leads_auth'
const LEADS_KEY = 'study_abroad_leads'

interface Lead {
  id: string
  fullName: string
  phoneNumber: string
  propertyType: string
  budget: string
  city: string
  status?: string
  submittedAt: string
}

export default function LeadsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if already logged in
    const auth = localStorage.getItem(AUTH_KEY)
    if (auth === 'true') {
      setIsLoggedIn(true)
      loadLeads()
    }
    setIsLoading(false)
  }, [])

  const loadLeads = () => {
    try {
      const stored = localStorage.getItem(LEADS_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        if (Array.isArray(data)) {
          setLeads(data)
        }
      }
    } catch (e) {
      console.error('Error loading leads:', e)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (email === EMAIL && password === PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true')
      setIsLoggedIn(true)
      loadLeads()
    } else {
      setError('Invalid email or password')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY)
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  const handleStatusChange = (id: string, newStatus: string) => {
    const updated = leads.map(lead => 
      lead.id === id ? { ...lead, status: newStatus } : lead
    )
    setLeads(updated)
    localStorage.setItem(LEADS_KEY, JSON.stringify(updated))
  }

  const exportCSV = () => {
    const headers = ['Full Name', 'Phone', 'Property Type', 'City', 'Budget', 'Status', 'Date']
    const rows = leads.map(l => [
      l.fullName || '',
      l.phoneNumber || '',
      l.propertyType || '',
      l.city || '',
      l.budget || '',
      l.status || 'new',
      new Date(l.submittedAt).toLocaleDateString()
    ])
    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'leads.csv'
    a.click()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Loading...</p>
      </div>
    )
  }

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter email"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Study Abroad Leads</h1>
            <p className="text-gray-500 text-sm">Total: {leads.length} leads</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-2xl font-bold text-gray-800">{leads.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-yellow-600 text-sm">New</p>
            <p className="text-2xl font-bold text-yellow-600">{leads.filter(l => !l.status || l.status === 'new').length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-green-600 text-sm">Converted</p>
            <p className="text-2xl font-bold text-green-600">{leads.filter(l => l.status === 'converted').length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-red-600 text-sm">Rejected</p>
            <p className="text-2xl font-bold text-red-600">{leads.filter(l => l.status === 'rejected').length}</p>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    <div className="flex items-center gap-2"><User className="w-4 h-4" /> Name</div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> Phone</div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    <div className="flex items-center gap-2"><Home className="w-4 h-4" /> Property</div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> City</div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    <div className="flex items-center gap-2"><IndianRupee className="w-4 h-4" /> Budget</div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Date</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.length > 0 ? (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{lead.fullName || '—'}</td>
                      <td className="py-3 px-4">
                        <a href={`tel:${lead.phoneNumber}`} className="text-blue-600 hover:underline">
                          {lead.phoneNumber || '—'}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {lead.propertyType || '—'}
                        </span>
                      </td>
                      <td className="py-3 px-4">{lead.city || '—'}</td>
                      <td className="py-3 px-4">{lead.budget || '—'}</td>
                      <td className="py-3 px-4">
                        <select
                          value={lead.status || 'new'}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`px-2 py-1 rounded text-xs font-medium border-0 cursor-pointer ${
                            lead.status === 'converted' ? 'bg-green-100 text-green-700' :
                            lead.status === 'rejected' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          <option value="new">🕐 New</option>
                          <option value="converted">✅ Converted</option>
                          <option value="rejected">❌ Rejected</option>
                        </select>
                      </td>
                      <td className="py-3 px-4 text-gray-500 text-sm">
                        {new Date(lead.submittedAt).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-gray-500">
                      <User className="w-12 h-12 mx-auto mb-2 opacity-20" />
                      <p>No leads yet</p>
                      <p className="text-xs">Leads will appear here when customers submit the form</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
