export interface MarketProductDbInterface {
  m_id: string;
  m_name: string;
  m_lineOne: string;
  m_lineTwo?: string;
  m_city: string;
  m_zipCode: string;
  m_createdAt: Date;
  m_updatedAt: Date;
  pro_id?: string;
  pro_name?: string;
  pro_category?: string;
  pro_quantity?: number;
  pro_price?: number;
  pro_marketId?: string;
  pro_createdAt?: Date;
  pro_updatedAt?: Date;
}
