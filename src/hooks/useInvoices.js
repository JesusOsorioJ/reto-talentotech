import { useState, useEffect } from 'react';
import api from '../api/axios';

export function useInvoices({ page, perPage }) {
  const [invoices, setInvoices] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get('/invoices', { params: { page, perPage } })
      .then(res => { setInvoices(res.data.items); setTotal(res.data.total); })
      .finally(() => setLoading(false));
  }, [page, perPage]);
  return { invoices, total, loading };
}