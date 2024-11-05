class DietaryRestriction < ApplicationRecord
    has_many :member_diets
    has_many :members, through: :member_diets

    validates :item_name, presence: true
    validates :item_name, format: { with: /\A[a-zA-Z\s]+\z/, message: "can only contain letters and spaces" }
end
