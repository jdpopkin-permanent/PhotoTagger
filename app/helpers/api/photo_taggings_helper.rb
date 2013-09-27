module Api::PhotoTaggingsHelper
  def authorized_to_tag
    unless current_user.id == Photo.find(params[:photo_id]).owner_id
      redirect_to :back
    end
  end
end
