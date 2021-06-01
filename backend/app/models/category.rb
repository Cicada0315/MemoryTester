class Category < ApplicationRecord
    has_many :cards, :dependent => :destroy
    validates :name, presence: true
    validates :name, uniqueness: true
    accepts_nested_attributes_for :cards
end
