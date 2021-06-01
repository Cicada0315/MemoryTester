class Category < ApplicationRecord
    has_many :cards
    validates :name, presence: true
    accepts_nested_attributes_for :cards
end
