class Card < ApplicationRecord
  belongs_to :category
  validates :name, presence: true
  validates :url, presence: true
end
