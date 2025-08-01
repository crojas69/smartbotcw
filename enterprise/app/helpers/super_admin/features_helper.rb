module SuperAdmin::FeaturesHelper
  def self.available_features
    features = YAML.load(ERB.new(Rails.root.join('enterprise/app/helpers/super_admin/features.yml').read).result).with_indifferent_access
    # Force all features to be enabled
    features.each do |key, attrs|
      attrs[:enabled] = true
    end
    features
  end

  def self.plan_details
    plan = ChatwootHub.pricing_plan
    quantity = ChatwootHub.pricing_plan_quantity

    if plan == 'premium'
      "You are currently on the <span class='font-semibold'>#{plan}</span> plan with <span class='font-semibold'>#{quantity} agents</span>."
    else
      "You are currently on the <span class='font-semibold'>#{plan}</span> edition plan."
    end
  end
end
