class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.references :owner, null: false
      t.string :url, null: false
      t.string :title

      t.timestamps
    end
    add_index :photos, :owner_id
  end
end
