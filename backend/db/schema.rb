# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_09_18_183602) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dietary_restrictions", force: :cascade do |t|
    t.string "item_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interests", force: :cascade do |t|
    t.string "interest_type"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "member_diets", force: :cascade do |t|
    t.integer "uin"
    t.integer "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "member_interests", force: :cascade do |t|
    t.integer "uin"
    t.integer "interest_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "members", primary_key: "uin", id: :serial, force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.string "major"
    t.integer "year"
    t.string "email"
    t.string "phone"
    t.string "tshirt_size"
    t.boolean "paid_dues"
    t.datetime "join_date"
    t.datetime "aggie_ring_day"
    t.datetime "birthday"
    t.datetime "graduation_day"
    t.boolean "archived"
    t.boolean "accepted"
    t.jsonb "accomplishments", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uin"], name: "index_members_on_uin", unique: true
  end

  create_table "project_members", force: :cascade do |t|
    t.integer "uin"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "date"
    t.jsonb "pictures"
    t.jsonb "timeline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.integer "uin"
    t.string "name"
    t.string "major"
    t.string "tshirt_size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_09_18_183602) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.integer "uin"
    t.string "name"
    t.string "major"
    t.string "tshirt_size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
