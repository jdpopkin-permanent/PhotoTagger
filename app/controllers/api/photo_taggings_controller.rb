class Api::PhotoTaggingsController < ApplicationController
  before_filter :require_current_user!, :authorized_to_tag, only: [:create]

  def create
    @photo_tagging = PhotoTagging.new(params[:photo_tagging])
    if @photo_tagging.save
      render json: @photo_tagging
    else
      render json: @photo_tagging, status: :unprocessable_entity
    end
  end

  def index
    @photo_taggings = PhotoTagging.where(photo_id: params[:photo_id])
    render json: @photo_taggings
  end
end
