class PhotoTagging < ActiveRecord::Base
  belongs_to :user # test
  belongs_to :photo

  attr_accessible :x_pos, :y_pos, :user_id, :photo_id
end
