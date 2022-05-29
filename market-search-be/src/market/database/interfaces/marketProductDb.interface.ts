export interface MarketProductDbInterface {
  m_id: string;
  m_name: string;
  m_lineOne: string;
  m_lineTwo?: string;
  m_city: string;
  m_zipCode: string;
  m_createdAt: string;
  m_updatedAt: string;
  pro_id?: string;
  pro_name?: string;
  pro_category?: string;
  pro_quantity?: number;
  pro_price?: string;
  pro_marketId?: string;
  pro_createdAt?: string;
  pro_updatedAt?: string;
}
