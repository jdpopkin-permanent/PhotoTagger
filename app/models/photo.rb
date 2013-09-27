class Photo < ActiveRecord::Base

  attr_accessible :title, :url, :owner_id

  belongs_to :owner, class_name: "User", foreign_key: :owner_id, primary_key: :id
  has_many :photo_taggings, class_name: "PhotoTagging", primary_key: :id, foreign_key: :photo_id
  has_many :tagged_users, through: :photo_taggings, source: :user
end
